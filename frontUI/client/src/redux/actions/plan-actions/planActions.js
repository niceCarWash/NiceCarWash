import axios from 'axios';

const listPlans = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/plans`);
};
const getPlan = async slug =>
  await axios.get(`${process.env.REACT_APP_API}/plan/${slug}`);

export { listPlans, getPlan };
