import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container, Button } from '@material-ui/core/';
import LoginStyle from '../auth/login/LoginStyle';
import firebase from 'firebase';
import LockIcon from '@material-ui/icons/Lock';
const UserInfo = ({ history }) => {
  const classes = LoginStyle();
  const logout = () => {
    firebase.auth().signOut();
    // dispatch({
    //   type: 'LOGOUT',
    //   payload: null,
    // });
    history.push('/login');
  };
  return (
    <Container>
      <Typography component="h1" variant="h5">
        User Info
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<LockIcon />}
        fullWidth
        onClick={logout}
      >
        Log Out
      </Button>
    </Container>
  );
};
export default UserInfo;
