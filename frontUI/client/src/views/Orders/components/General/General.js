import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import clsx from 'clsx';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import Validations from './Validations';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(0, 2),
  },
  toggleButtonGroup: {
    background: 'transparent',
  },
  toggleButton: {
    background: 'transparent',
    border: '1px solid white',
    padding: theme.spacing(1, 5),
  },
  toggleButtonActive: {
    backgroundColor: 'white !important',
  },
  toggleTitle: {
    textTransform: 'capitalize',
  },
  toggleTitleActive: {
    color: theme.palette.primary.main,
  },
}));

const General = props => {
  let dispatch = useDispatch();
  const { className, ...rest } = props;
  const classes = useStyles();

  const [planOrService, setPlanOrService] = React.useState('plan');
  const handleClick = (event, newOptoin) => {
    setPlanOrService(newOptoin);
  };
  //Load Store
  const { auth, plans, servicesList } = useSelector(state => ({ ...state }));
  let user = auth;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // Handle Booking
  const handleBooking = values => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      fullName: null,
      email: null,
      service: '',
      plan: '',
    },
    validationSchema: Validations,
    onSubmit: async values => {
      await handleBooking(values);
    },
  });

  return (
    <div className={className} {...rest}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item lg={6}>
            <Typography variant="h6" color="textPrimary">
              Order Information
            </Typography>
          </Grid>
          <div className={classes.toggleContainer} data-aos="fade-up">
            <ToggleButtonGroup
              value={planOrService}
              exclusive
              onChange={handleClick}
              className={classes.toggleButtonGroup}
            >
              <ToggleButton
                value="plan"
                className={clsx(
                  classes.toggleButton,
                  planOrService === 'plan' ? classes.toggleButtonActive : {},
                )}
              >
                <Typography
                  variant="h5"
                  className={clsx(
                    classes.fontWeightBold,
                    classes.textWhite,
                    classes.toggleTitle,
                    planOrService === 'plan' ? classes.toggleTitleActive : {},
                  )}
                >
                  Plan
                </Typography>
              </ToggleButton>
              <ToggleButton
                value="Service"
                className={clsx(
                  classes.toggleButton,
                  planOrService === 'Service' ? classes.toggleButtonActive : {},
                )}
              >
                <Typography
                  variant="h5"
                  className={clsx(
                    classes.fontWeightBold,
                    classes.textWhite,
                    classes.toggleTitle,
                    planOrService === 'Service'
                      ? classes.toggleTitleActive
                      : {},
                  )}
                >
                  Service
                </Typography>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

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
          {planOrService === 'Service' && (
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                Select Service
              </Typography>

              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                onChange={formik.handleChange}
                fullWidth
              >
                {servicesList.data.map(res => (
                  <MenuItem key={res._id} value={formik.values.service}>
                    {res.service}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          )}
          {planOrService === 'plan' && (
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.inputTitle}
              >
                Select Plan
              </Typography>

              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                onChange={formik.handleChange}
                fullWidth
              >
                {plans.data.map(res => (
                  <MenuItem key={res._id} value={formik.values.plan}>
                    {res.planTitle}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          )}

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
