import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { authFirbase } from 'Firebase';
import {
  deleteUser,
  createOrUpdateUserProfile,
} from 'redux/actions/auth_actions/AuthAction';
import { useFormik } from 'formik';
import Validations from './Validations';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

const General = props => {
  let dispatch = useDispatch();
  let history = useHistory();
  const { className, ...rest } = props;
  const classes = useStyles();

  const [warning, setWarning] = useState();
  const [success, setSuccess] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //Load Store
  const { auth } = useSelector(state => ({ ...state }));
  let user = auth;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleUserDelete = async () => {
    handleClose();
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
      setWarning(error.message);
    }
  };

  const handleUserUpdate = async e => {
    try {
      const result = await authFirbase.currentUser;
      await result.updateProfile({
        displayName: e.fullName,
      });
      const idTokenResult = await result.getIdTokenResult();
      createOrUpdateUserProfile(user.token, e)
        .then(res => {
          dispatch({
            type: 'USER_PROFILE_UPDATE',
            loading: false,
            payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
              country: res.data.country,
              city: res.data.city,
              address: res.data.address,
              phone: res.data.phone,
              birthdate: res.data.birthdate,
            },
          });
          toast.success('Profile Updated');
          setSuccess('Profile Updated');
        })
        .catch(err => {
          toast.error(err.message);
          setWarning(err.message);
        });
    } catch (error) {
      toast.error(error.message);
      setWarning(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: user.name,
      country: user.country,
      city: user.city,
      address: user.address,
      phone: user.phone,
      birthdate: user.birthdate,
    },
    validationSchema: Validations,
    onSubmit: async values => {
      await handleUserUpdate(values);
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
              onClick={handleClickOpen}
            >
              Delete
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {'Are you sure you want to delete your account'}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  All your orders and data will be lost
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={handleUserDelete} color="secondary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            {warning && <Alert severity="error">{warning}</Alert>}
            {success && <Alert severity="success">{success}</Alert>}
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
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
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
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
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
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Phone
            </Typography>
            <TextField
              placeholder="Phone"
              variant="outlined"
              size="medium"
              name="phone"
              fullWidth
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Birthdate
            </Typography>
            <TextField
              placeholder="Birthdate"
              variant="outlined"
              size="medium"
              name="birthdate"
              fullWidth
              type="date"
              value={formik.values.birthdate}
              onChange={formik.handleChange}
              error={
                formik.touched.birthdate && Boolean(formik.errors.birthdate)
              }
              helperText={formik.touched.birthdate && formik.errors.birthdate}
            />
          </Grid>
          <Grid item container justify="flex-start" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              disabled={!(formik.isValid && formik.dirty)}
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
