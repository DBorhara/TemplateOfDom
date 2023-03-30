import { FieldValues, useForm } from "react-hook-form";
import ControlledInput from "./ControlledInput";
import Button from "./Button";

interface FormProps {
  formTitle: string;
}

interface MyFormValues extends FieldValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  date: Date;
}

const Form = ({ formTitle }: FormProps) => {
  const { handleSubmit, control, reset, setValue } = useForm<MyFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      date: new Date(),
    },
  });
  const formFields = [
    { placeHolder: "Email", name: "email", type: "email" },
    { placeHolder: "Password", name: "password", type: "password" },
    { placeHolder: "First Name", name: "firstName", type: "text" },
    { placeHolder: "Last Name", name: "lastName", type: "text" },
    { placeHolder: "Date Picker", name: "datePicker", type: "date" },
  ];

  const formSubmit = (data: object) => console.log(data);

  const inputClass =
    "pl-2 h-10 rounded-md outline-0 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary dark:focus-within:ring-secondary";

  return (
    <div className="w-1/3 rounded-lg bg-tertiary p-5">
      <div className="pb-5 text-center text-2xl">
        <h1>{formTitle}</h1>
      </div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="grid grid-cols-2 grid-rows-4 gap-5 pb-5">
          {formFields.map(({ type, placeHolder, name }) => (
            <ControlledInput
              key={name}
              type={type}
              control={control}
              placeHolder={placeHolder}
              name={name}
              setValue={setValue}
              className={
                name === "firstName" || name === "lastName"
                  ? "col-span-1 " + inputClass
                  : "col-span-2 " + inputClass
              }
            />
          ))}
        </div>
        <div className={`flex flex-row justify-between`}>
          <Button bgColor="primary" type="button" onClick={() => reset()}>
            Reset Fields
          </Button>
          <Button bgColor="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Form;
