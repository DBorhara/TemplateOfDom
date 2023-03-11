"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Switch from "./sampleComponents/Switch";

// source code
// https://www.npmjs.com/package/next-themes#avoid-hydration-mismatch
export const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  let label =
    theme === "light" ? (
      <SunIcon className={` h-6 w-6 text-yellow-500`} />
    ) : (
      <MoonIcon className={`h-6 w-6 text-white`} />
    );

  return (
    <Switch
      title={"darkMode"}
      label={label}
      checked={currentTheme === "dark"}
      onChange={() => setTheme(currentTheme === "light" ? "dark" : "light")}
    />
  );
};
