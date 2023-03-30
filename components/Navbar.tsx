/**
 Navbar.tsx
 This component renders a responsive navigation bar for the application.
 The navigation bar contains a logo, navigation links, a 'Get started' button,
 and a dark mode switch.
 */
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "./DarkModeSwitch";
import Button from "./sampleComponents/Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  // Type Definitions
  interface Link {
    id: number;
    href: string;
    title: string;
  }

  type navLinks = Link[];
  // Navigation links data
  const navLinks: navLinks = [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/colorPicker", title: "Pick Colors(WIP)" },
    { id: 3, href: "/about", title: "About" },
    { id: 4, href: "/componentsList", title: "Components" },
  ];
  // State to track the current theme mode
  const [isLight, setIsLight] = useState(true);
  const { theme } = useTheme();
  // Router instance to navigate programmatically
  const router = useRouter();
  // Update isLight state whenever the theme changes
  useEffect(() => {
    setIsLight((prev) => !prev);
  }, [theme]);
  // Render the Navbar component
  return (
    <>
      {/* Main navigation bar container */}
      <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-tertiary px-2 py-2 dark:border-gray-600 dark:bg-primary sm:px-4">
        {/* Logo container */}
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Button type={"link"} link={"/"} className="flex pr-10">
            <Image
              priority
              src={`/image/logo.webp`}
              alt={`Dark Mode Logo`}
              width={60}
              height={60}
            />
          </Button>
          {/* Get started button container */}
          <div className="flex md:order-2">
            <Button
              type={"link"}
              link={"componentsList"}
              bgColor={"primary"}
              darkBgColor={"tertiary"}
            >
              Get started
            </Button>
            {/* Hamburger menu button for smaller screens */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-primary md:text-sm md:font-medium md:dark:bg-secondary">
              {/* Iterate through navLinks and render each navigation link */}
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="block rounded py-2 pl-3 pr-4 text-white hover:text-secondary dark:text-primary dark:hover:text-tertiary md:p-0"
                    aria-current="page"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              {/* Dark mode switch container */}
              <li>
                <DarkModeSwitch />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
