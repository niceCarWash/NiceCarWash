import * as yup from 'yup';

const Validations = () =>
  yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required!'),
    fullName: yup
      .string('Fullname is required')
      .min(4, 'Too short')
      .required('Name is required!'),
    service: yup
      .string()
      .ensure()
      .required('Service Is Required'),
    plan: yup
      .string()
      .ensure()
      .required('Plan Is Required'),
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
  });

export default Validations;
