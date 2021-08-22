import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Section } from 'components/organisms';

import Validations from './Validations';
import { useFormik } from 'formik';
import { useStyles } from './Style';
import { Link } from 'react-router-dom';
const CategoryForm = props => {
  const { name, Loading, CategoryFormHandler } = props;

  const formik = useFormik({
    initialValues: {
      name: name,
    },
    validationSchema: Validations,
    onSubmit: async values => {
      await CategoryFormHandler(values);
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
            to="/admin/?pid=all_categories"
          >
            <ArrowBackIcon />
            Back to Categories
          </Button>
        </form>
      </Section>
    </div>
  );
};

CategoryForm.propTypes = {
  /**
   * External classes
   */
  name: PropTypes.string.isRequired,
  Loading: PropTypes.bool.isRequired,
  CategoryFormHandler: PropTypes.func.isRequired,
};

export default CategoryForm;
