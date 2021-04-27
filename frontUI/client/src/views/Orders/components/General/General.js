import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { authFirbase } from 'Firebase';
import { useDispatch, useSelector } from 'react-redux';
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
  MenuItem,
} from '@material-ui/core';
import { orderRequest } from 'redux/actions/user_actions/orderRequest';

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

  // Loading State
  const [loading, setLoading] = useState(false);
  //Load Store
  const { auth, plans, servicesList } = useSelector(state => ({ ...state }));

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const user = authFirbase.currentUser;

  // Handle Booking
  const handleBooking = async e => {
    setLoading(false);
    try {
      orderRequest(auth.token, e, auth._id).then();
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      service: '',
      plan: '',
      country: '',
      city: '',
      address: '',
    },
    validationSchema: Validations,
    onSubmit: async values => {
      setLoading(true);
      await handleBooking(values);
    },
  });

  return (
    <div className={className} {...rest}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item lg={6}>
            <Typography variant="h6" color="textPrimary">
              Order Information
            </Typography>
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
              Select Service
            </Typography>
            <TextField
              style={{ width: '200px' }}
              className="px-2 my-2"
              variant="outlined"
              name="service"
              id="service"
              select
              onChange={formik.handleChange}
              value={formik.values.service}
              error={formik.touched.service && Boolean(formik.errors.service)}
              helperText={formik.touched.service && formik.errors.service}
            >
              {servicesList.data.map(res => (
                <MenuItem key={res._id} value={res._id}>
                  {res.service}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Select Plan
            </Typography>

            <TextField
              style={{ width: '200px' }}
              className="px-2 my-2"
              variant="outlined"
              name="plan"
              id="plan"
              select
              onChange={formik.handleChange}
              value={formik.values.plan}
              error={formik.touched.plan && Boolean(formik.errors.plan)}
              helperText={formik.touched.plan && formik.errors.plan}
            >
              {plans.data.map(res => (
                <MenuItem key={res._id} value={res._id}>
                  {res.planTitle}
                </MenuItem>
              ))}
            </TextField>
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
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
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
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
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
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
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
              disabled={loading}
            >
              Book Now
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
