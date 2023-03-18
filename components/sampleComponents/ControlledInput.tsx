import { useController } from "react-hook-form";

const ControlledInput = (props: any) => {
  const { field, fieldState } = useController(props);

  return (
    <>
      <input
        className={props.className}
        type={props.type}
        {...field}
        placeholder={props.placeHolder}
      />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </>
  );
};
export default ControlledInput;
