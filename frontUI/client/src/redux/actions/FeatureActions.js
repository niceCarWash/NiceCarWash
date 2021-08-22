import axios from 'axios';

export const getFeature = async slug =>
  await axios.get(`${process.env.REACT_APP_API}/feature/${slug}`);

export const removeFeature = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/feature/${slug}`, {
    headers: {
      Authorization: authtoken,
    },
  });

export const updateFeature = async (slug, feature, authtoken) => {
  const data = {
    'Content-Type': 'application/x-www-form-urlencoded',
    name: feature,
    slug: slug,
  };

  return await axios.put(
    `${process.env.REACT_APP_API}/feature/${data.slug}`,
    data,
    {
      headers: {
        Authorization: authtoken,
      },
    },
  );
};

export const createFeature = async (feature, authtoken) => {
  const data = {
    'Content-Type': 'application/json',
    name: feature,
  };

  return await axios.post(`${process.env.REACT_APP_API}/feature`, data, {
    headers: {
      Authorization: authtoken,
    },
  });
};
