import * as yup from 'yup';

const Validations = () =>
  yup.object().shape({
    fullName: yup
      .string('Fullname is required')
      .min(4, 'Too short')
      .required('Name is required!'),
    country: yup
      .string('Country is required')
      .min(2, 'Too short')
      .required('country is required!'),
    city: yup
      .string('City is required')
      .min(2, 'Too short')
      .required('city is required!'),
    address: yup
      .string('Address is required')
      .min(8, 'Too short')
      .required('Address is required!'),
    phone: yup
      .string('Phone is required')
      .min(4, 'Too short')
      .required('Phone is required!'),
    birthdate: yup
      .string('Birthdate is required')
      .required('Birthdate is required!'),
  });

export default Validations;
