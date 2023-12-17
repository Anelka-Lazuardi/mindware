import { FormType } from '@/lib/type';
import { cn } from '@/lib/utils';
import { Input } from '@nextui-org/react';
import React from 'react';
import { Controller } from 'react-hook-form';

type Props = {
  field: FormType;
  control: any;
  errors: any;
};

const InputText = (props: Props) => {
  const { field, control, errors } = props;
  return (
    <div className={cn('col-span-2 lg:col-span-1')}>
      <Controller
        name={field.name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            type="text"
            value={value}
            variant="bordered"
            label={field.label}
            errorMessage={errors[field.name]?.message}
            isInvalid={Boolean(errors[field.name])}
            onChange={onChange}
            labelPlacement="outside"
            placeholder={`Please Enter ${field.label}`}
            size="lg"
          />
        )}
      />
    </div>
  );
};

export default InputText;
