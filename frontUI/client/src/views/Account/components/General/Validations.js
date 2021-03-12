import * as yup from 'yup';

const Validations = () =>
  yup.object({
    fullName: yup
      .string('Enter your Name')
      .min(2, 'Must be more than one character')
      .required('First Name Is Required'),
    lastName: yup
      .string('Enter your First Name')
      .min(2, 'Must be more than one character')
      .required('First Name Is Required'),
  });
export default Validations;
