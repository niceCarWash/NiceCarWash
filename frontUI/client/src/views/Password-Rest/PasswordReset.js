import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { authFirbase } from '../../Firebase';
import { useStyles } from './Style';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import Validations from './Validations';
// Materil UI imports
import { Button, TextField, Grid } from '@material-ui/core/';
import Alert from '@material-ui/lab/Alert';

const PasswordReset = props => {
  let history = props.history;
  const { auth } = useSelector(state => ({ ...state }));

  useEffect(() => {
    if (auth && auth.token) history.push('/');
  }, [auth, history]);

  const [Loading, setLoading] = useState(false);
  const [Message, setMessage] = useState();
  const [ErrorMessage, setErrorMessage] = useState();

  const passwordResetHandle = async values => {
    console.log('In the password reset handle ');
    const { email } = values;

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await authFirbase
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setLoading(false);
        setMessage('Check your email for password reset link');
      })
      .catch(error => {
        setLoading(false);
        setErrorMessage(error.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Validations,
    onSubmit: async values => {
      console.log('In the Submit Block');
      setLoading(true);
      await passwordResetHandle(values);
    },
  });

  const classes = useStyles();
  return (
    <div>
      <Section className={classes.section}>
      
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
        

        <Section className={classes.pagePaddingTop}>
          <SectionHeader
            title="Password Reset"
            titleProps={{
              variant: 'h3',
            }}
          />
          <Section className={classes.pagePaddingTop}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    name="email"
                    label="email"
                    type="email"
                    id="email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
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
                Password Reset
              </Button>
            </form>
          </Section>
        </Section>
      </Section>
    </div>
  );
};

export default PasswordReset;
