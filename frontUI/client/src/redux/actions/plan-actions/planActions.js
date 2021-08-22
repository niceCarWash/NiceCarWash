import axios from 'axios';

export const createPlan = async (product, authtoken) => {
  const data = {
    'Content-Type': 'application/json',
    product: product,
  };
  return await axios.post(`${process.env.REACT_APP_API}/product`, data, {
    headers: {
      Authorization: authtoken,
    },
  });
};
export const updatePlan = async (slug, product, authtoken) => {
  const data = {
    'Content-Type': 'application/json',
    product: product,
    slug: slug,
  };
  return await axios.put(
    `${process.env.REACT_APP_API}/product/${data.slug}`,
    data,
    {
      headers: {
        Authorization: authtoken,
      },
    },
  );
};

export const listPlans = async () => {
  return await axios.get(`${process.env.REACT_APP_API}/plans`);
};
export const getPlan = async slug =>
  await axios.get(`${process.env.REACT_APP_API}/plan/${slug}`);
