import axios from 'axios';
// Order Request
export const contact = async (name, email, message) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/contact`,
    { email, message, name },
  );
};
