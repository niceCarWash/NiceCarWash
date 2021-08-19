import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { authFirbase } from '../../Firebase';
import { useStyles } from './Style';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import Validations from './Validations';
// Materil UI imports
import { Button, TextField } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Register = () => {
  let dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);
  const [Message, setMessage] = useState();
  const [ErrorMessage, setErrorMessage] = useState();

  const registerHandle = async values => {
    const { email } = values;
    setLoading(true);
    try {
      dispatch({ type: ' AUTH_START', loading: true });
      const config = {
        url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
        handleCodeInApp: true,
      };
      await authFirbase
        .sendSignInLinkToEmail(email, config)
        .then(dispatch({ type: 'APP_START', loading: false }));
      setMessage(`Email is sent to ${email} Click the link to complete your
      registration`);

      // save user email in local storage
      window.localStorage.setItem('emailForRegistration', email);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMessage(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Validations,
    onSubmit: async values => {
      await registerHandle(values);
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Section className={classes.section}>
        <Section className={classes.pagePaddingTop}>
          {Message && (
            <Section className={classes.section}>
              <Alert severity="success">{Message}</Alert>
            </Section>
          )}
          {ErrorMessage && (
            <Section className={classes.section}>
              <Alert severity="error">{ErrorMessage}</Alert>
            </Section>
          )}
        </Section>

        <Section className={classes.pagePaddingTop}>
          <SectionHeader
            title="Sign up"
            titleProps={{
              variant: 'h3',
            }}
          />
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
            <Section className={classes.pagePaddingTop}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                component={Link}
                to="/login"
                startIcon={<ExitToAppIcon />}
              >
                Have account? Sign In
              </Button>
            </Section>
          </form>
        </Section>
      </Section>
    </div>
  );
};

export default Register;
