import axios from 'axios';
// New user Registration or Update
const createUser = async authtoken => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authtoken.token,
  };
  return await axios.post(
    `${process.env.REACT_APP_API}/create-user`,
    {},
    {
      headers: headers,
    },
  );
};

const currentUser = async authtoken => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authtoken.token,
  };
  return await axios.post(
    `${process.env.REACT_APP_API}/current-user`,
    {},
    {
      headers: headers,
    },
  );
};

const updateUser = async (updateInfo, authtoken) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authtoken.token,
  };
  return await axios.post(
    `${process.env.REACT_APP_API}/update-user`,
    updateInfo,
    {
      headers: headers,
    },
  );
};

const deleteUser = async _id => {
  return await axios.delete(`${process.env.REACT_APP_API}/delete-user/${_id}`);
};

export { createUser, updateUser, currentUser, deleteUser };
