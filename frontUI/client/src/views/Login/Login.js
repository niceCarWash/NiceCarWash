import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  authFirbase,
  googleAuthProvider,
  facebookAuthProvider,
} from '../../Firebase';
import { useStyles } from './Style';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import Validations from './Validations';
import { createOrUpdateUser } from '../../redux/actions/auth_actions/AuthAction';
// Materil UI imports
import { Button, TextField, Grid, Box } from '@material-ui/core/';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FacebookIcon from '@material-ui/icons/Facebook';
import Alert from '@material-ui/lab/Alert';

const Login = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  const roleBasedRedirect = res => {
    if (res.data.role === 'admin') {
      history.push('/admin');
    } else {
      history.push('/account');
    }
  };

  const [ErrorMessage, setErrorMessage] = useState();
  const [userLoading, setUserLoading] = useState(false);

  const signInHandle = async values => {
    const { email, password } = values;
    try {
      const result = await authFirbase.signInWithEmailAndPassword(
        email,
        password,
      );
      const { user } = result;
      const authtoken = await user.getIdTokenResult();
      createOrUpdateUser(authtoken)
        .then(res => {
          dispatch({
            type: 'AUTH_SUCCESS',
            loading: false,
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: authtoken.authtoken,
              role: res.data.role,
              _id: res.data._id,
            },
          });

          roleBasedRedirect(res);
          dispatch({ type: 'AUTH_END', loading: false });
          toast.success(`Welcome back ${res.data.name}`);
        })
        .catch(err => {
          dispatch({ type: 'AUTH_FAIL', loading: false, payload: null });
          setUserLoading(false);
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      setUserLoading(false);
      setErrorMessage(error.message);
    }
  };

  const googleLogin = () => {
    authFirbase
      .signInWithPopup(googleAuthProvider)
      .then(async result => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult();
        createOrUpdateUser(idTokenResult)
          .then(res => {
            dispatch({
              type: 'LOGGED_IN_USER',
              loading: false,
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            roleBasedRedirect(res);
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err);
        setErrorMessage(err.message);
      });
  };

  const facebookLogin = () => {
    authFirbase
      .signInWithPopup(facebookAuthProvider)
      .then(async result => {
        var credential = result.credential;
        const idTokenResult = credential.accessToken.token;
        createOrUpdateUser(idTokenResult)
          .then(res => {
            dispatch({
              type: 'LOGGED_IN_USER',
              loading: false,
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
            roleBasedRedirect(res);
          })
          .catch(err => console.log(err));
      })
      .catch(err => {
        console.log(err);
        setErrorMessage(err.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: 'fullstackdeveloper80@gmail.com',
      password: '12345678',
    },
    validationSchema: Validations,
    onSubmit: async values => {
      setUserLoading(true);
      await signInHandle(values);
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Section className={classes.section}>
        <Section className={classes.pagePaddingTop}>
          {ErrorMessage && <Alert severity="error">{ErrorMessage}</Alert>}
        </Section>

        <Section className={classes.pagePaddingTop}>
          <SectionHeader
            title="Log In"
            titleProps={{
              variant: 'h3',
            }}
          />
          <Section className={classes.pagePaddingTop}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={userLoading}
                >
                  Sign In
                </Button>
                <Box m={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    endIcon={<LockOpenIcon />}
                    onClick={googleLogin}
                  >
                    Continue With Google
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    endIcon={<FacebookIcon />}
                    onClick={facebookLogin}
                  >
                    Continue with Facebook
                  </Button>
                </Box>
                <Grid container>
                  <Grid item xs>
                    <Link to="/password_reset">Forgot password?</Link>
                  </Grid>
                  <Grid item>
                    <Link to="/register">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Section>
        </Section>
      </Section>
    </div>
  );
};

export default Login;
