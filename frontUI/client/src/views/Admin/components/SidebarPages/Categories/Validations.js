import * as yup from 'yup';

const Validations = () =>
  yup.object({
    name: yup
      .string('Enter Category Name')
      .required('This field is required')
      .min(2)
      .max(32),
  });

export default Validations;
