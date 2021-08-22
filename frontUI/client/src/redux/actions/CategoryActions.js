import axios from 'axios';

export const getCategory = async slug =>
  await axios.get(`${process.env.REACT_APP_API}/category/${slug}`);

export const removeCategory = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/category/${slug}`, {
    headers: {
      Authorization: authtoken,
    },
  });

export const updateCategory = async (slug, category, authtoken) => {
  const data = {
    'Content-Type': 'application/x-www-form-urlencoded',
    name: category,
    slug: slug,
  };

  return await axios.put(
    `${process.env.REACT_APP_API}/category/${data.slug}`,
    data,
    {
      headers: {
        Authorization: authtoken,
      },
    },
  );
};

export const createCategory = async (category, authtoken) => {
  const data = {
    'Content-Type': 'application/json',
    name: category,
  };

  return await axios.post(`${process.env.REACT_APP_API}/category`, data, {
    headers: {
      Authorization: authtoken,
    },
  });
};
