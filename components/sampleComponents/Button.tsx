// Libraries
import { MouseEventHandler, ReactNode, useEffect, useState } from "react";

type ButtonProps = {
  bgColor: string;
  children: ReactNode;
  className?: string;
  darkBgColor?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
const Button = ({
  children,
  bgColor,
  darkBgColor,
  onClick,
  className,
}: ButtonProps) => {
  const [customStyle, setCustomStyle] = useState<string>(
    `mr-3 rounded-lg bg-${bgColor} dark:bg-${darkBgColor} px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-secondary dark:hover:bg-secondary dark:focus:ring-tertiary md:mr-0`
  );
  useEffect(() => {
    if (className) {
      setCustomStyle(className);
    }
  }, [className]);
  return (
    <button
      onClick={onClick}
      type="button"
      // TODO Make bg and darkBg work with tailwindCSS colors non string value Possibly bg-[${color}] or something like that
      className={customStyle}
    >
      {children}
    </button>
  );
};
export default Button;
