import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Header from './components/nav/Header';
import ForgotPassword from './pages/auth/ForgotPassword';
import PrimaryNav from './components/nav/MainNav';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import RegisterComplete from './pages/auth/completeRegistration/CompleteRegsitration';
import UserInfo from './pages/users/UserInfo';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { currentUser } from './functions/auth';
import { Email } from '@material-ui/icons';

const App = () => {
  // const dispatch = useDispatch();

  // // to check firebase auth state
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const idTokenResult = await user.getIdTokenResult();
  //       console.log('user', user);

  //       currentUser(idTokenResult.token)
  //         .then((res) => {
  //           dispatch({
  //             type: 'LOGGED_IN_USER',
  //             payload: {
  //               name: res.data.name,
  //               email: res.data.email,
  //               token: idTokenResult.token,
  //               role: res.data.role,
  //               _id: res.data._id,
  //             },
  //           });
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   });
  //   // cleanup
  //   return () => unsubscribe();
  // }, []);

  return (
    <>
      <PrimaryNav />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userinfo" component={UserInfo} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
      </Switch>
    </>
  );
};

export default App;
