import { FormType } from '@/lib/type';
import { cn } from '@/lib/utils';
import {
  Autocomplete,
  AutocompleteItem,
  Input,
  Select,
  SelectItem,
} from '@nextui-org/react';
import React from 'react';
import { Controller, UseFormSetValue } from 'react-hook-form';

type Props = {
  field: FormType;
  control: any;
  errors: any;
  setValue: UseFormSetValue<any>;
};

const InputSelect = (props: Props) => {
  const { field, control, errors, setValue } = props;

  return (
    <div className={cn('col-span-2 lg:col-span-1')}>
      <Controller
        name={`${field.name}_name`}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Autocomplete
            variant="bordered"
            defaultItems={field.data}
            label={field.label}
            labelPlacement="outside"
            placeholder="Select an Option"
            size="lg"
            value={value}
            errorMessage={errors[field.name]?.message}
            isInvalid={Boolean(errors[field.name])}
            onSelectionChange={(key: React.Key) => {
              if (key) {
                const filterList =
                  field.data &&
                  field.data.filter((value) => value.value === key);
                if (filterList) {
                  setValue(field.name, filterList[0].value);
                }
              } else {
                setValue(field.name, '');
              }
              onChange(key);
            }}
          >
            {(item) => (
              <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
            )}
          </Autocomplete>
        )}
      />
    </div>
  );
};

export default InputSelect;
