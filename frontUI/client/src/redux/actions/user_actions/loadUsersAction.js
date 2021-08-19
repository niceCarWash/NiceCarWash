import axios from 'axios';
// Load All users
export const loadUsers = async authtoken => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authtoken,
  };
  return await axios.get(
    `${process.env.REACT_APP_API}/users`,
    {},
    {
      headers: headers,
    },
  );
};
