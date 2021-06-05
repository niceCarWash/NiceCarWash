import * as yup from 'yup';

const Validations = () =>
  yup.object().shape({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required!'),
    name: yup
      .string('Fullname is required')
      .min(4, 'Too short')
      .required('Name is required!'),
    message: yup
      .string()
      .min(10, 'Too short')
      .required('Message Is Required'),
  });

export default Validations;
