'use client';
import CountrySelect from '@/components/Form/CountrySelect';
import InputArea from '@/components/Form/InputArea';
import InputNumber from '@/components/Form/InputNumber';
import InputSelect from '@/components/Form/InputSelect';
import InputText from '@/components/Form/InputText';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';

type Props = {
  defaultValue: any;
  schema: any;
  listField: any;
  message: string;
};

const Form = (props: Props) => {
  const { defaultValue, schema, listField, message } = props;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValue,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    enqueueSnackbar(message, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
    reset();
  };

  return (
    <form
      className="w-full grid gap-5 grid-cols-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      {listField.map((contact: any, index: number) => {
        if (contact.type === 'text') {
          return (
            <InputText
              key={index}
              field={contact}
              control={control}
              errors={errors}
            />
          );
        } else if (contact.type === 'textarea') {
          return (
            <InputArea
              key={index}
              field={contact}
              control={control}
              errors={errors}
            />
          );
        } else if (contact.type === 'select') {
          return (
            <InputSelect
              key={index}
              field={contact}
              control={control}
              errors={errors}
              setValue={setValue}
            />
          );
        } else if (contact.type === 'number') {
          return (
            <InputNumber
              key={index}
              field={contact}
              control={control}
              errors={errors}
            />
          );
        } else if (contact.type === 'country') {
          return (
            <CountrySelect
              key={index}
              field={contact}
              control={control}
              errors={errors}
              setValue={setValue}
            />
          );
        } else if (contact.type === 'header') {
          return (
            <div className="w-full col-span-2" key={contact.label}>
              <h1 className="text-xl font-bold text-primaryDark">
                {contact.label}
              </h1>
            </div>
          );
        } else if (contact.type === 'hr') {
          return (
            <div className="w-full col-span-2" key={contact.label}>
              <hr />
            </div>
          );
        }
      })}

      <div className="w-full col-span-2">
        <div className="">
          <button
            type="submit"
            className="bg-secondary py-2 text-white px-8 rounded-xl ring ring-secondary hover:bg-white
           hover:text-secondary duration-300 ease-in-out transition-all"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
