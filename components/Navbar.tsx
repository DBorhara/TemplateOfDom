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
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

export default function Navbar() {
  // Type Definitions
  interface Link {
    id: number;
    href: string;
    title: string;
    children?: Link[];
  }

  type navLinks = Link[];
  // Navigation links data
  const navLinks: navLinks = [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/colorPicker", title: "Pick Colors(WIP)" },
    { id: 3, href: "/about", title: "About" },
    {
      id: 4,
      href: "/",
      title: "Components",
      children: [
        { id: 1, href: "/switch", title: "Switch" },
        { id: 2, href: "/reusablePages/buttonPage", title: "Button" },
        { id: 3, href: "/modal", title: "Modal" },
        { id: 3, href: "/table", title: "Table" },
        { id: 3, href: "/imageCard", title: "Image Card" },
        { id: 3, href: "/reusablePages/formPage", title: "Form" },
      ],
    },
  ];
  // State to track the current theme mode
  const [isLight, setIsLight] = useState(true);
  const { theme } = useTheme();
  // Router instance to navigate programmatically
  const router = useRouter();
  // State to track the dropdown menu visibility
  const [showDropdown, setShowDropdown] = useState(false);
  // Update isLight state whenever the theme changes
  useEffect(() => {
    setIsLight((prev) => !prev);
  }, [theme]);
  // Render the Navbar component
  return (
    <>
      {/* Main side navigation bar container */}
      <nav className="fixed top-0 left-0 z-20 h-full border-r border-gray-200 bg-tertiary px-2 py-2 dark:border-gray-600 dark:bg-primary sm:px-4">
        <div className="container mx-auto flex flex-col">
          {/* Logo container */}
          <Button type={"link"} link={"/"} className="mb-6 flex justify-center">
            <Image
              priority
              src={`/image/logo.webp`}
              alt={`Dark Mode Logo`}
              width={60}
              height={60}
            />
          </Button>
          {/* Dark mode switch container */}

          <div className=" flex flex-col">
            <DarkModeSwitch />
          </div>
          {/* Get started button container */}
          <div className="my-7 pl-5">
            <Button
              type={"link"}
              link={"getStarted"}
              bgColor={"primary"}
              darkBgColor={"tertiary"}
            >
              Get started
            </Button>
          </div>
          <ul className="flex flex-col text-sm font-medium">
            {/* Iterate through navLinks and render each navigation link */}
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.children ? (
                  <div className="relative ">
                    <button
                      onClick={() => setShowDropdown((prev) => !prev)}
                      className="flex py-2 pr-4 text-white hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700"
                      aria-current="page"
                    >
                      {showDropdown ? (
                        <ChevronDownIcon className="mr-2 w-5" />
                      ) : (
                        <ChevronRightIcon className="mr-2 w-5" />
                      )}
                      <div className="pr-3">{link.title}</div>
                    </button>
                    {showDropdown && (
                      <ul className="ml-4 flex flex-col space-y-2 py-1 text-sm font-medium">
                        {link.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              href={child.href}
                              className="block py-2 pl-6 pr-4 text-white hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 pl-6 pr-4 text-white hover:bg-gray-100 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700"
                    aria-current="page"
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
