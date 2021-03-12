import axios from 'axios';
import { LOGGED_IN_USER } from '../actionTypes';

export const currentUser = async (authtoken) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authtoken,
  };
  return await axios.post(
    `${process.env.REACT_APP_API}/current-user`,
    {},
    {
      headers: headers,
    }
  );
};
