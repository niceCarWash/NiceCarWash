import React from 'react';
import * as yup from 'yup';

const SignUpFormValidation = () =>
  yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    firstName: yup
      .string('Enter your First Name')
      .min(2, 'Must be more than one character')
      .required('First Name Is Required'),
    firstName: yup
      .string('Enter your First Name')
      .min(2, 'Must be more than one character')
      .required('First Name Is Required'),
    password: yup
      .string()
      .min(8, 'Must be more than 8 characters')
      .required('This field is required'),
    verifyPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });
export default SignUpFormValidation;
