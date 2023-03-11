import { useRouter } from "next/router";
import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  bgColor: string;
  darkBgColor?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
const Button = ({ children, bgColor, darkBgColor, onClick }: ButtonProps) => {
  const router = useRouter();
  return (
    <button
      onClick={onClick}
      type="button"
      // TODO Make bg and darkBg work with tailwindCSS colors non string value Possibly bg-[${color}] or something like that
      className={`mr-3 rounded-lg bg-${bgColor} dark:bg-${darkBgColor} px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-secondary dark:hover:bg-secondary dark:focus:ring-tertiary md:mr-0`}
    >
      {children}
    </button>
  );
};
export default Button;
