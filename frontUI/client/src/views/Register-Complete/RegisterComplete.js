import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { authFirbase } from '../../Firebase';
import { useStyles } from './Style';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { createOrUpdateUser } from '../../redux/actions/auth_actions/AuthAction';
import Validations from './Validations';
// Materil UI imports
import { Button, TextField, Grid, Typography } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

const RegisterComplete = () => {
  let history = useHistory();

  let dispatch = useDispatch();

  const [Loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState();

  const roleBasedRedirect = res => {
    if (res.data.role === 'admin') {
      history.push('/admin/dashboard');
    } else {
      history.push('/user/history');
    }
  };
  const registerCompleteHandle = async values => {
    const { email, password } = values;
    try {
      dispatch({ type: ' AUTH_START', loading: true });
      const result = await authFirbase.signInWithEmailLink(
        email,
        window.location.href,
      );
      if (result.user.emailVerified) {
        window.localStorage.removeItem('emailForRegistration');

        let user = authFirbase.currentUser;
        await user.updatePassword(password);
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
            dispatch({ type: 'AUTH_END ', loading: false });
          })
          .catch(err => {
            dispatch({
              type: 'AUTH_FAIL',
              loading: false,
              payload: null,
            });
            console.log(err);
            setLoading(false);
            setErrorMessage(err.message);
          });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: window.localStorage.getItem('emailForRegistration'),
      firstName: 'Imran',
      lastName: 'Abdullah',
      password: '12345678',
      verifyPassword: '12345678',
    },
    validationSchema: Validations,
    onSubmit: async values => {
      setLoading(true);
      await registerCompleteHandle(values);
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Section className={classes.sectionNoPaddingTop}>
        <form className={classes.formContainer} onSubmit={formik.handleSubmit}>
          <SectionHeader
            title="Sign up"
            subtitle="We're happy to see you come"
            titleProps={{
              variant: 'h3',
            }}
          />
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
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
            disabled={Loading}
          >
            Sign Up
          </Button>
        </form>
      </Section>
    </div>
  );
};

export default RegisterComplete;
