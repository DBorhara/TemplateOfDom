import { SubmitHandler, useForm } from "react-hook-form";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { UserLogin } from "../schema/user.schema";

type Inputs = {
  userName: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserLogin>();
  const onSubmit: SubmitHandler<UserLogin> = (data) => console.log(data);

  console.log(watch("userName")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label
          htmlFor="input-group-1"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-secondary"
        >
          Your Email
        </label>
        <div className="relative mb-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <EnvelopeIcon
              aria-hidden="true"
              className="h-5 w-5 text-primary dark:text-secondary"
              viewBox="0 0 23 23"
            />
          </div>
          <input
            type={`text`}
            {...register("userName")}
            id="input-group-1"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-secondary dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="User Name"
          />
        </div>
        {errors.userName && <span>This field is required</span>}
        {/* include validation with required or other standard HTML validation rules */}
        <input
          type={`password`}
          {...register("password", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
