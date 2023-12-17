'use client';
import Form from '@/components/Form';
import { formContactUs } from '@/lib/data';
import { defaultData, schema } from './validation';

type Props = {};

const FormField = (props: Props) => {
  return (
    <Form
      defaultValue={defaultData}
      schema={schema}
      listField={formContactUs}
      message="Thank you for getting in touch! We appreciate you contacting us. We try to respond as soon as possible, so a representative will get back to you the soonest."
    />
  );
};

export default FormField;
