import axios from 'axios';
// New user Registration or Update

const listPlans = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/plans`);
};

export { listPlans };
