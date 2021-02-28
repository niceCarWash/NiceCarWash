import React, { useEffect } from 'react';
// Materil UI imports
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LoginStyle from '../../auth/login/LoginStyle';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
//Using Formik and YUP
import { useFormik } from 'formik';
import SignUpFormValidation from '../YupValidations/SignUpFormValidation';

// Import Redux Acctions
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/auth_actions/LoginUserAction';

const Register = ({ register, loading, cleanUp }) => {
  const classes = LoginStyle();
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  const formik = useFormik({
    initialValues: {
      email: 'fullstackdeveloper80@gmail.com',
    },
    validationSchema: SignUpFormValidation(),
    onSubmit: async (values, { setSubmitting }) => {
      await register(values);
      setSubmitting(false);
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
            loading={loading ? 'Logging in...' : null}
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
      <Box mt={8}></Box>
    </Container>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  register: actions.SignUpWithEmail,
  cleanUp: actions.Clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
