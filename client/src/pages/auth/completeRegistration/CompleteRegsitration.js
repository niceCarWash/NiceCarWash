import React, { useState, useEffect } from 'react';

// material ui imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SingUpCompleteStyle from '../styles/SingUpCompleteStyle';
import { useFormik } from 'formik';
import SignUpCompleteValidation from '../YupValidations/SignUpCompleteValidation';

// Import Redux Acctions
import * as actions from '../../../redux/actions/auth_actions/LoginUserAction';
import { connect } from 'react-redux';
const RegisterComplete = ({ completeRegister, loading, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  const formik = useFormik({
    initialValues: {
      email: window.localStorage.getItem('emailForRegistration'),
      firstName: 'Imran',
      lastName: 'Abdullah',
      password: '12345678',
      verifyPassword: '12345678',
    },
    validationSchema: SignUpCompleteValidation(),
    onSubmit: async (values, { setSubmitting }, history) => {
      await completeRegister(values);
      console.log('After Complete');
      setSubmitting(false);
    },
  });
  const classes = SingUpCompleteStyle();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                disabled
                value={formik.values.email}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="verifyPassword"
                label="Verify Password"
                type="password"
                id="verifyPassword"
                autoComplete="verify-password"
                value={formik.values.verifyPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.verifyPassword &&
                  Boolean(formik.errors.verifyPassword)
                }
                helperText={
                  formik.touched.verifyPassword && formik.errors.verifyPassword
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            loading={loading ? 'Logging in...' : null}
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});
const mapDispatchToProps = {
  completeRegister: actions.CompleteSignUpWithEmail,
  cleanUp: actions.Clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComplete);
