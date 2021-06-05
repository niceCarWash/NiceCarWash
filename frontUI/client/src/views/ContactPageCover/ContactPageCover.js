import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useStyles } from './Style';
import Cover from '../data/photo_2021-03-10_01-56-31 (2).jpg';
import { useDispatch, useSelector } from 'react-redux';
import { authFirbase } from 'Firebase';
import Alert from '@material-ui/lab/Alert';
import Validations from './Validations';
import {contact} from 'redux/actions/user_actions/contactAction'

import { useFormik } from 'formik';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const ContactPageCover = () => {
  const classes = useStyles();
  let dispatch = useDispatch();
  const [Message, setMessage] = useState();
  const [ErrorMessage, setErrorMessage] = useState();
  // Loading State
  const [loading, setLoading] = useState(false);
  //Load Store
  const { auth, plans, servicesList } = useSelector(state => ({ ...state }));
  const user = authFirbase.currentUser;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleContact = (values) => {
    const { name, email, message} = values
    setLoading(false);
    try {
      contact(name, email, message).then();
      setMessage('Contact made Successfuly, we will contact you soon!')
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message)
    }
  };

  const formik = useFormik({
    initialValues: {
      name: auth.name || '',
      email: auth.email || '',
      message: '',
    },
    validationSchema: Validations,
    onSubmit: async values => {
      setLoading(true);
      await handleContact(values);
    },
  });

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <Image
              src={Cover}
              alt="Contact"
              className={classes.image}
              lazyProps={{ width: '100%' }}
            />
          </div>
          <div className={classes.content}>
            <SectionHeader
              title="Contact us for anything"
              subtitle="Our goal is to be as helpful as possible."
              data-aos="fade-up"
              align="center"
            />
            {Message && (
              <Section className={classes.section}>
                <Alert severity="success">{Message}</Alert>
              </Section>
            )}
            {ErrorMessage && (
              <Section className={classes.section}>
                <Alert severity="error">{ErrorMessage}</Alert>
              </Section>
            )}
            <div>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <Grid container spacing={isMd ? 4 : 2}>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography variant="subtitle1" color="textPrimary">
                    Full name
                  </Typography>
                  <TextField
                    placeholder="Your full name"
                    variant="outlined"
                    size="medium"
                    name="name"
                    fullWidth
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.name && Boolean(formik.errors.name)
                    }
                    helperText={
                      formik.touched.name && formik.errors.name
                    }
                  />
                </Grid>
                <Grid item xs={12} data-aos="fade-up">
                  <Typography variant="subtitle1" color="textPrimary">
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
                <Grid item xs={12} data-aos="fade-up">
                  <Typography variant="subtitle1" color="textPrimary">
                    Message
                  </Typography>
                  <TextField
                    placeholder="Your question about our services"
                    variant="outlined"
                    name="message"
                    fullWidth
                    multiline
                    rows={4}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.message && Boolean(formik.errors.message)
                    }
                    helperText={formik.touched.message && formik.errors.message}
                  />
                </Grid>
                <Grid item container justify="center" xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={loading}
                  >
                    submit
                  </Button>
                </Grid>
              </Grid>
              </form>
            </div>
          </div>
        </div>
      </Section>
      <Divider />
    </div>
  );
};

export default ContactPageCover;
