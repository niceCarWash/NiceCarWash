import React from 'react';
// Materil UI imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LoginStyle from '../auth/login/LoginStyle';
import Copyright from './styles/Copyright';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
//Using Formik and YUP
import { useFormik } from 'formik';
import SignUpFormValidation from './YupValidations/SignUpFormValidation';

// Import Firbase Function
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

export default function SignUp({ history }) {
  const SignUpWithEmail = async (e) => {
    try {
      const config = {
        url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
        handleCodeInApp: true,
      };
      await auth.sendSignInLinkToEmail(e, config);
      toast.success(
        `Email is sent to ${e}. Click the link to complete your registration.`
      );
      // save user email in local storage
      window.localStorage.setItem('emailForRegistration', e);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const classes = LoginStyle();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: SignUpFormValidation(),
    onSubmit: (values) => {
      SignUpWithEmail(values.email);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign Up With Email and Password
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
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
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
