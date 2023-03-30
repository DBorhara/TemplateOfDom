import { Control, FieldError, useController } from "react-hook-form";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

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
  setValue?: (
    name: string,
    value: any,
    options?: {
      shouldValidate?: boolean;
      shouldDirty?: boolean;
      shouldTouch?: boolean;
    }
  ) => void;
}

const ControlledInput = ({
  className,
  type,
  placeHolder,
  error,
  setValue,
  ...props
}: InputTypes) => {
  const { field } = useController(props);
  const [calValue, setCalValue] = useState({ startDate: null, endDate: null });

  const handleCalValueChange = (newValue: any) => {
    setCalValue(newValue);
    if (setValue) setValue(props.name, newValue);
  };

  if (type === "date") {
    return (
      <Datepicker
        value={calValue}
        onChange={handleCalValueChange}
        primaryColor="red"
        asSingle={true}
        useRange={false}
        showShortcuts={false}
        showFooter
        readOnly={false}
        disabled={false}
        placeholder="Sample Cal"
        inputClassName={`col-span-2 pr-2 h-10 rounded-md outline-0 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary dark:focus-within:ring-secondary dark:bg-[#3B3B3B]`}
      />
    );
  }

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
