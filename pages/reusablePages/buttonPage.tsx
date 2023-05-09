import Button from "../../components/sampleComponents/Button";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";

const ButtonPage = () => {
  const codeString = `
  import { MouseEventHandler, ReactNode, useMemo } from "react";
import Link from "next/link";

type ButtonProps = {
  bgColor?: string;
  children: ReactNode;
  className?: string;
  darkBgColor?: string;
  type: "button" | "submit" | "reset" | "link";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  link?: string;
};

const Button = ({
  type,
  children,
  bgColor,
  darkBgColor,
  onClick,
  className,
  link = "/",
}: ButtonProps) => {
  const customStyle = useMemo(
    () =>
      className ||
      \`mr-3 rounded-lg bg-\${bgColor} dark:bg-\${darkBgColor} px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-secondary dark:hover:bg-secondary dark:focus:ring-tertiary md:mr-0\`,
    [bgColor, darkBgColor, className]
  );

  return type === "link" ? (
    <Link className={customStyle} href={link as string}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} type={type} className={customStyle}>
      {children}
    </button>
  );
};

export default Button;

  `;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <span className="text-black">Button Component</span>
      <Button type="button" bgColor="primary" onClick={() => {}}>
        Sample
      </Button>
      <div className="w-full">
        <h2>Example Code Snippet with Template Strings:</h2>
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {codeString.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default ButtonPage;
