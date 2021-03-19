import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { authFirbase } from '../../../../Firebase';
import { deleteUser } from '../../../../redux/actions/auth_actions/AuthAction';
import { useFormik } from 'formik';
import Validations from './Validations';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

const General = props => {
  let dispatch = useDispatch();
  const { className, ...rest } = props;
  const classes = useStyles();

  //Load Store
  const { auth } = useSelector(state => ({ ...state }));
  let user = auth;

  const [Loading, setLoading] = useState(false);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleUserDelete = async () => {
    const _id = auth._id;
    try {
      const user = await authFirbase.currentUser;
      await user.delete();
      deleteUser(_id).then(res => {
        dispatch({
          type: 'CLEAN_UP',
          payload: null,
          loading: false,
        });
        console.log(res);
      });
      localStorage.removeItem('persist:root');
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: window.localStorage.getItem('emailForRegistration'),
      fullName: user.name,
      email: user.email,
    },
    validationSchema: Validations,
    onSubmit: async values => {
      setLoading(true);
      // await registerCompleteHandle(values);
    },
  });

  return (
    <div className={className} {...rest}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item lg={6}>
            <Typography variant="h6" color="textPrimary">
              Basic Information
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleUserDelete}
            >
              Delete
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Full name
            </Typography>
            <TextField
              placeholder="Your full name"
              variant="outlined"
              size="medium"
              name="fullName"
              fullWidth
              type="text"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              E-mail
            </Typography>
            <TextField
              placeholder="Your e-mail address"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Country
            </Typography>
            <TextField
              placeholder="Country"
              variant="outlined"
              size="medium"
              name="country"
              fullWidth
              type="text"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              City
            </Typography>
            <TextField
              placeholder="City"
              variant="outlined"
              size="medium"
              name="city"
              fullWidth
              type="text"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Full Address
            </Typography>
            <TextField
              placeholder="Your address"
              variant="outlined"
              size="medium"
              name="address"
              fullWidth
              type="text"
            />
          </Grid>
          <Grid item container justify="flex-start" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              save
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

General.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default General;
