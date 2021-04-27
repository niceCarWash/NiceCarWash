import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { authFirbase } from '../../../../Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { orderList } from 'redux/actions/user_actions/orderLIst';
import { useHistory } from 'react-router-dom';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Button,
  Divider,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
const useStyles = makeStyles(theme => ({
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
  switchTitle: {
    fontWeight: 700,
  },
  titleCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Orders = props => {
  // let dispatch = useDispatch();
  // let history = useHistory();

  // const { auth } = useSelector(state => ({ ...state }));
  // const [warning, setWarning] = useState();
  // //Orders Load
  // const loadOrders = () => {
  //   orderList(auth.token, auth._id)
  //     .then(orders => {
  //       dispatch({
  //         type: 'ORDER_LIST',
  //         payload: orders,
  //       });
  //     })
  //     .catch(error => {
  //       setWarning(error.message);
  //     });
  // };

  // useEffect(() => {
  //   loadOrders();
  // }, []);

  // // Logout
  // const firebaseLogOut = () => {
  //   localStorage.removeItem('persist:root');
  //   authFirbase.signOut();
  //   dispatch({
  //     type: 'CLEAN_UP',
  //     payload: null,
  //     loading: false,
  //   });
  //   history.push('/');
  // };
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        {/* <Grid item xs={12}>
          <div className={classes.titleCta}>
            <Typography variant="h6" color="textPrimary">
              Change Password
            </Typography>
            <Button variant="outlined" color="primary" onClick={firebaseLogOut}>
              Log out
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          {warning && <Alert severity="error">{warning}</Alert>} */}
        {/* </Grid> */}
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Current password
          </Typography>
        </Grid>
        {/* <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            New password
          </Typography>
          <TextField
            placeholder="New password"
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle1"
            color="textPrimary"
            className={classes.inputTitle}
          >
            Repeat password
          </Typography>
          <TextField
            placeholder="Repeat password"
            variant="outlined"
            size="medium"
            name="fullname"
            fullWidth
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch color="primary" defaultChecked />}
            label={
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.switchTitle}
              >
                Public Profile
              </Typography>
            }
            labelPlacement="end"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Switch color="primary" />}
            label={
              <Typography
                variant="subtitle1"
                color="textPrimary"
                className={classes.switchTitle}
              >
                Expose your email
              </Typography>
            }
            labelPlacement="end"
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
        </Grid> */}
      </Grid>
    </div>
  );
};

Orders.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Orders;
