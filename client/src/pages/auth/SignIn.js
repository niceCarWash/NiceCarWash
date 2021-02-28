import React, { useState } from 'react';

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
import SignStyle from './styles/SignStyle';
import Copyright from './styles/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Loading from '../loading/LoadingPage';
// redux
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
//Using Formik and YUP
import { useFormik } from 'formik';
import LoginFormValidation from './YupValidations/LoginFormValidation';

// Import Firbase Function
import GoogleAuth from './firbaseFunctions/GoogleAuth';
import FacebookAuth from './firbaseFunctions/FacebookAuth';
import { createOrUpdateUser } from '../../../src/redux/actions/auth_actions/LoginUserAction';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const SignIn = ({ history }) => {
  const [loading, setLoading] = useState(false);
  let dispatch = useDispatch();
  const EmailAndPassowrd = async (e) => {
    const { email, password } = e;
    try {
      setLoading(true);
      console.log('In the try Block');
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const authtoken = await user.getIdTokenResult();
      createOrUpdateUser(authtoken.token)
        .then((res) => {
          dispatch({
            type: 'LOGIN_USER_SUCCESS',
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: authtoken.token,
              role: res.data.role,
              _id: res.data._id,
            },
          });
          toast.success('Welcome ' + user.displayName);
          history.push('/');
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.message);
    }
  };

  const classes = SignStyle();
  const formik = useFormik({
    initialValues: () => ({
      email: 'ihkldoo@gmail.com',
      password: '12345678',
    }),
    validationSchema: LoginFormValidation(),
    onSubmit: (values, { props }) => props.dispatch(EmailAndPassowrd(values)),
  });

  const LoginForm = () => (
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
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );

  return (
    <Container component="main" maxWidth="xs">
      {loading ? <Loading /> : <LoginForm />}
    </Container>
  );
};
export default SignIn;
