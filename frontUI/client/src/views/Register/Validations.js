import * as yup from 'yup';

const Validations = () =>
  yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  });

export default Validations;
