'use client';
import Form from '@/components/Form';
import { formBecomePartners } from '@/lib/data';
import { defaultData, schema } from './validation';

type Props = {};

const FormField = (props: Props) => {
  return (
    <Form
      defaultValue={defaultData}
      schema={schema}
      listField={formBecomePartners}
      message="Thank you for your interest in becoming a partner. We will get back to you soon regarding your submission."
    />
  );
};

export default FormField;
