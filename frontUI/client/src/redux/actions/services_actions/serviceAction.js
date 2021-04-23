import axios from 'axios';
// New user Registration or Update

const listServices = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/services`);
};

export { listServices };
