import axios from 'axios';
// Order Request
export const orderList = async (authtoken, user_id) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authtoken.token,
  };
  return await axios.get(
    `${process.env.REACT_APP_API}/order/:${user_id}`,
    {},
    {
      headers: headers,
    },
  );
};
