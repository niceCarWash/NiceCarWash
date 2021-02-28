import axios from 'axios';
import * as actions from '../actionTypes';
import { toast } from 'react-toastify';
// Sign Up with Email and Password
import firebase from 'firebase';
const auth = firebase.auth();

// The Sign In  Action
const SignUpWithEmail = (e) => async (dispatch) => {
  const { email } = e;
  try {
    dispatch({ type: actions.AUTH_START });
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
    await firebase.auth().sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );
    // save user email in local storage
    window.localStorage.setItem('emailForRegistration', email);
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
  dispatch({ type: actions.AUTH_END });
};

// The Sign Up Complete Action
const CompleteSignUpWithEmail = (e) => async (dispatch) => {
  const { email, password } = e;
  try {
    const result = await auth.signInWithEmailLink(email, window.location.href);
    if (result.user.emailVerified) {
      window.localStorage.removeItem('emailForSignIn');

      let user = auth.currentUser;
      await user.updatePassword(password);
      const authtoken = await user.getIdTokenResult();
      const headers = {
        'Content-Type': 'application/json',
        Authorization: authtoken.token,
      };
      await axios
        .post(
          `${process.env.REACT_APP_API}/create-or-update-user`,
          {},
          {
            headers: headers,
          }
        )
        .then((res) => {
          dispatch({
            type: actions.AUTH_SUCCESS,
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: authtoken.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          toast.success(`Welcome ${res.data.name}`);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
        });
    }
  } catch (error) {
    dispatch({ type: actions.AUTH_FAIL, payload: error.message });
    console.log(error);
    toast.error(error.message);
  }

  dispatch({ type: actions.AUTH_END });
};

// New user Registration
const createOrUpdateUser = (data) => async (dispatch) => {
  const { email, password } = data;
  try {
    dispatch({ type: actions.AUTH_START });
    const result = await auth.signInWithEmailAndPassword(email, password);
    const { user } = result;
    const authtoken = await user.getIdTokenResult();
    const Authorization = authtoken.token;
    await axios
      .post(
        `${process.env.REACT_APP_API}/create-or-update-user`,
        {},
        {
          headers: {
            Authorization,
          },
        }
      )
      .then((res) =>
        dispatch({
          type: actions.AUTH_SUCCESS,
          payload: {
            name: res.data.name,
            email: res.data.email,
            token: res.headers.authtoken,
            role: res.data.role,
            _id: res.data._id,
          },
        })
      )
      .catch((err) => {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message });
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: actions.AUTH_END });
};

// Clean up messages
const Clean = () => ({
  type: actions.CLEAN_UP,
});

export { createOrUpdateUser, Clean, SignUpWithEmail, CompleteSignUpWithEmail };
