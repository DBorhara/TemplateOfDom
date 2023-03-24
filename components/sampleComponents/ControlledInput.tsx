import {
  Control,
  FieldError,
  FieldValues,
  useController,
} from "react-hook-form";

interface InputTypes {
  className?: string;
  type: string;
  placeHolder?: string;
  name: string;
  control: Control<any>;
  rules?: Partial<{
    required: string | boolean;
    minLength: number;
    maxLength: number;
    pattern: RegExp;
  }>;
  error?: FieldError;
}

const ControlledInput = ({
  className,
  type,
  placeHolder,
  error,
  ...props
}: InputTypes) => {
  const { field, fieldState } = useController(props);

  return (
    <>
      <input
        className={className}
        type={type}
        {...field}
        placeholder={placeHolder}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  );
};

export default ControlledInput;
