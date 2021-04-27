import axios from 'axios';
// Order Request
export const orderRequest = async (authtoken, order, user_id) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: authtoken,
  };
  return await axios.post(
    `${process.env.REACT_APP_API}/order`,
    { order, user_id },
    {
      headers: headers,
    },
  );
};
