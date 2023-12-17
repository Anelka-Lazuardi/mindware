import { FormType } from '@/lib/type';
import { cn } from '@/lib/utils';
import { Textarea } from '@nextui-org/react';
import { Controller } from 'react-hook-form';

type Props = {
  field: FormType;
  control: any;
  errors: any;
};

const InputArea = (props: Props) => {
  const { field, control, errors } = props;
  return (
    <div className={cn('col-span-2')}>
      <Controller
        name={field.name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Textarea
            errorMessage={errors[field.name]?.message}
            isInvalid={Boolean(errors[field.name])}
            value={value}
            onChange={onChange}
            variant="bordered"
            label={field.label}
            labelPlacement="outside"
            minRows={10}
          />
        )}
      />
    </div>
  );
};

export default InputArea;
