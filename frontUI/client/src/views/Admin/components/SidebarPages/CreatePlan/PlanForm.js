import React from 'react';
import PropTypes from 'prop-types';
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

const PlanForm = props => {
  const {
    className,
    handlePlanForm,
    title,
    category,
    features,
    price,
    time,
    image,
    Loading,
    ...rest
  } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const formik = useFormik({
    initialValues: {
      title: title,
      category: category,
      features: features,
      price: price,
      time: time,
      image: image,
    },
    validationSchema: Validations,
    onSubmit: async values => {
      await handlePlanForm(values);
    },
  });

  return (
    <div className={className} {...rest}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Title
            </Typography>
            <TextField
              placeholder="Plan Title"
              variant="outlined"
              size="medium"
              name="title"
              fullWidth
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Category
            </Typography>
            <TextField
              placeholder="Category"
              variant="outlined"
              size="medium"
              name="category"
              fullWidth
              type="text"
              value={formik.values.category}
              onChange={formik.handleChange}
              error={formik.touched.category && Boolean(formik.errors.category)}
              helperText={formik.touched.category && formik.errors.category}
            />
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          {/* <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Select features for this plan
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
          </Grid> */}

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Price
            </Typography>
            <TextField
              placeholder="Price"
              variant="outlined"
              size="medium"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
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
              Time
            </Typography>
            <TextField
              placeholder="Time"
              variant="outlined"
              size="medium"
              name="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              error={formik.touched.time && Boolean(formik.errors.time)}
              helperText={formik.touched.time && formik.errors.time}
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
              Image
            </Typography>
            {/* <TextField
              placeholder="Phone"
              variant="outlined"
              size="medium"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              fullWidth
              type="text"
            /> */}
          </Grid>

          <Grid item container justify="flex-start" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              disabled={!(formik.isValid && formik.dirty && !Loading)}
            >
              Create Plan
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

PlanForm.propTypes = {
  className: PropTypes.string,
  handlePlanForm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  Loading: PropTypes.bool.isRequired,
};

export default PlanForm;
