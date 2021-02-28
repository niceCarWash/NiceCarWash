import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as actions from '../../../redux/actions/auth_actions/LoginUserAction';
import * as userActions from '../../../redux/actions/auth_actions/userRedirectAction';
import { connect } from 'react-redux';

// Materil UI imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Loading from '../../loading/LoadingPage';

//
import GoogleAuth from '../firbaseFunctions/GoogleAuth';
import FacebookAuth from '../firbaseFunctions/FacebookAuth';
// Login Form Style
import LoginStyle from './LoginStyle';

//Import Yup Validation
import LoginFormValidation from '../YupValidations/LoginFormValidation';

const Login = ({ login, loading, redirect, email, password }) => {
  const classes = LoginStyle();

  const formik = useFormik({
    initialValues: {
      email: email,
      password: password,
    },
    validationSchema: LoginFormValidation(),
    onSubmit: async (values, { setSubmitting }) => {
      await login(values);
      await redirect('/');
      setSubmitting(false);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
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
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            loading={loading ? 'Logging in...' : null}
          >
            Sign In
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.button}
            endIcon={<LockOpenIcon />}
            fullWidth
            onClick={GoogleAuth}
          >
            Continue With Google
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            endIcon={<FacebookIcon />}
            fullWidth
            onClick={FacebookAuth}
          >
            Continue with Facebook
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    email: auth.email,
    password: auth.password,
    loading: auth.loading,
  };
};

const mapDispatchToProps = {
  login: actions.createOrUpdateUser,
  redirect: userActions.roleBasedRedirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
