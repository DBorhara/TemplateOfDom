import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Switch from "./sampleComponents/Switch";

export const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const label =
    theme === "light" ? (
      <SunIcon className="h-6 w-6 text-yellow-300" />
    ) : (
      <MoonIcon className="h-6 w-6 text-white" />
    );

  return (
    <Switch
      title="darkMode"
      label={label}
      checked={currentTheme === "dark"}
      onChange={() => setTheme(currentTheme === "light" ? "dark" : "light")}
    />
  );
};
