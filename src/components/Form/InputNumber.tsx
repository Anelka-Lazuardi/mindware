// const InputNumber = ({ value, label }: { value: string; label: string }) => {
//     return (
//   <Input
//     key={label}
//     isRequired
//     type="number"
//     value={value}
//     variant="bordered"
//     label={label}
//     labelPlacement="outside"
//     placeholder={`Please Enter ${label}`}
//     size="lg"
//   />
//     );
//   };

import { FormType } from '@/lib/type';
import { cn } from '@/lib/utils';
import { Input, Select, SelectItem } from '@nextui-org/react';
import React from 'react';
import { Controller } from 'react-hook-form';

type Props = {
  field: FormType;
  control: any;
  errors: any;
};

const InputNumber = (props: Props) => {
  const { field, control, errors } = props;
  return (
    <div className={cn('col-span-2 lg:col-span-1')}>
      <Controller
        name={field.name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            type="number"
            value={value ?? ''}
            onChange={onChange}
            variant="bordered"
            label={field.label}
            labelPlacement="outside"
            placeholder={`Please Enter ${field.label}`}
            size="lg"
            errorMessage={errors[field.name]?.message}
            isInvalid={Boolean(errors[field.name])}
          />
        )}
      />
    </div>
  );
};

export default InputNumber;
