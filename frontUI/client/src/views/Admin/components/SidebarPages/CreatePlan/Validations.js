import * as yup from 'yup';

const Validations = () =>
  yup.object({
    title: yup
      .string('Enter Plan Title')
      .required('This field is required')
      .min(2)
      .max(32),
    category: yup
      .string('Enter Plan Category')
      .required('This field is required')
      .min(2)
      .max(32),
    features: yup
      .array('Enter Plan Features')
      .required('This field is required'),
    price: yup.string('Enter Plan Price').required('This field is required'),
    time: yup.string('Enter Plan Hours').required('This field is required'),
    image: yup.string('Enter Plan Image').required('This field is required'),
  });

export default Validations;
