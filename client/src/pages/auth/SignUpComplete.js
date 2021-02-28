import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SingUpCompleteStyle from './styles/SingUpCompleteStyle';
import { useFormik } from 'formik';
import SignUpCompleteValidation from './YupValidations/SignUpCompleteValidation';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';
import { createOrUpdateUser } from '../../../src/redux/actions/auth_actions/LoginUserAction';

// Start of SignUp Function
export default function SignUpComplete({ history }) {
  const classes = SingUpCompleteStyle();

  const SignUpCompleteFirebase = async (e) => {
    try {
      const result = await auth.signInWithEmailLink(
        e.email,
        window.location.href
      );
      if (result.user.emailVerified) {
        // remove user email fom local storage
        window.localStorage.removeItem('emailForRegistration');
        let user = auth.currentUser;
        await user.updatePassword(e.password);
        const authtoken = await user.getIdTokenResult();
        toast.success('Sign Up Compeleted!');
        createOrUpdateUser(authtoken.token);
        history.push('/');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: window.localStorage.getItem('emailForRegistration'),
      firstName: 'Imran',
      lastName: 'Abdullah',
      password: '12345678',
      verifyPassword: '12345678',
      birthday: '',
    },
    validationSchema: SignUpCompleteValidation(),
    onSubmit: (values) => {
      SignUpCompleteFirebase(values);
    },
  });

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
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                name="birthday"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={formik.values.birthday}
                onChange={formik.handleChange}
                error={
                  formik.touched.birthday && Boolean(formik.errors.birthday)
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
          >
            Sign Up
          </Button>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}
