import axios from 'axios';
// New user Registration or Update
const createOrUpdateUser = async authtoken => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authtoken.token,
  };
  console.log(headers);
  return await axios.post(
    `${process.env.REACT_APP_API}/create-or-update-user`,
    {},
    {
      headers: headers,
    },
  );
};

export { createOrUpdateUser };
