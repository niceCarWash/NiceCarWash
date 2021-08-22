import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Section } from 'components/organisms';

import Validations from './Validations';
import { useFormik } from 'formik';
import { useStyles } from './Style';
import { Link } from 'react-router-dom';
const FeatureForm = props => {
  const { name, Loading, featureFormHandler } = props;

  const formik = useFormik({
    initialValues: {
      name: name,
    },
    validationSchema: Validations,
    onSubmit: async values => {
      await featureFormHandler(values);
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Section className={classes.pagePaddingTop}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!(formik.isValid && formik.dirty && !Loading)}
          >
            Submit
          </Button>
          <br />
          <Button
            fullWidth
            variant="outlined"
            color="default"
            component={Link}
            to="/admin/?pid=all_features"
          >
            <ArrowBackIcon />
            Back to Features
          </Button>
        </form>
      </Section>
    </div>
  );
};

FeatureForm.propTypes = {
  /**
   * External classes
   */
  name: PropTypes.string.isRequired,
  Loading: PropTypes.bool.isRequired,
  featureFormHandler: PropTypes.func.isRequired,
};

export default FeatureForm;
