import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object({
  first_name: yup.string().required('First Name is Required'),
  last_name: yup.string().required('Last Name is Required'),
  job_title: yup.string().required('Job Title * is Required'),

  company: yup.string().required('Company is Required'),
  street_address: yup.string().required('Street Address is Required'),
  street_address_line: yup.string(),
  city: yup.string().required('City is Required'),
  state_provice: yup.string().required('State / Province is Required'),
  po_box: yup.string().required('PO BOX is Required'),
  country: yup.string().required('Country is Required'),
  vat: yup.string().required('VAT Or Registration Number  is Required'),
  email: yup
    .string()
    .email('Email Address is not Valid')
    .required('Email Address is Required'),
  phone: yup
    .string()
    .required('Phone Number is Required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  website: yup.string().required('Website Type  is Required'),

  message: yup.string().required('Your Company Currently Sells  is Required'),
  solution: yup.string().required('Solution Are You Interested is Required'),
  hear_from: yup.string().required('How Did You Hear About Us  is Required'),
});

const defaultData = {
  first_name: '',
  last_name: '',
  job_title: '',
  company: '',
  email: '',
  street_address: '',
  street_address_line: '',
  city: '',
  state_provice: '',
  po_box: '',
  country: '',
  vat: '',
  phone: '',
  website: '',
  message: '',
  hear_from: '',
  solution: '',
};

export { schema, defaultData };
