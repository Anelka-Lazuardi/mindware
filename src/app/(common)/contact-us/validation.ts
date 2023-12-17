import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object({
  first_name: yup.string().required('First Name is Required'),
  last_name: yup.string().required('Last Name is Required'),
  company: yup.string().required('Company is Required'),
  email: yup.string().email('Email is not Valid').required('Email is Required'),
  message: yup.string().required('Message is Required'),
  inquiry: yup.string().required('Inquiry Type  is Required'),
  country: yup.string().required('Country is Required'),
  solution: yup.string().required('Solution Are You Interested is Required'),
  phone: yup
    .string()
    .required('Phone Number is Required')
    .matches(phoneRegExp, 'Phone number is not valid'),
});

const defaultData = {
  first_name: '',
  last_name: '',
  company: '',
  email: '',
  message: '',
  inquiry: '',
  solution: '',
  phone: '',
  country: '',
};

export { schema, defaultData };
