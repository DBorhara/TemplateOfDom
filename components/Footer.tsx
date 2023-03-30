import Image from "next/image";
import Link from "next/link";
import React from "react";
import { theme } from "../tailwind.config.js";
import CustomSVG from "./UtilComponents/CustomSVG";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}
const FooterLink = ({ href, children }: FooterLinkProps) => (
  <Link className="hover:text-secondary" href={href}>
    {children}
  </Link>
);

const Footer: React.FC = () => {
  const { secondary } = theme?.extend?.colors as { secondary: string };
  const linkSections = [
    {
      title: "Resources",
      links: [
        { href: "https://nextjs.org/", label: "Next.js" },
        { href: "https://tailwindcss.com/", label: "Tailwind CSS" },
      ],
    },
    {
      title: "Follow us",
      links: [{ href: "https://github.com/DBorhara", label: "Github" }],
    },
    {
      title: "Legal",
      links: [
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms & Conditions" },
      ],
    },
  ];

  const socials = [
    { name: "facebook", href: "#" },
    { name: "instagram", href: "#" },
    { name: "twitter", href: "#" },
    { name: "github", href: "#" },
  ];

  return (
    <footer className="bg-tertiary p-4 dark:bg-primary sm:p-6">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link className={"flex items-center"} href={`/`}>
            <Image
              priority
              src={`/image/logo.webp`}
              alt="Your company logo"
              width={50}
              height={50}
            />
            <span className="self-center whitespace-nowrap pl-2 text-2xl font-semibold text-primary">
              Template
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          {linkSections.map(({ title, links }) => (
            <div key={title}>
              <h2 className="mb-6 text-sm font-semibold uppercase text-primary dark:text-secondary">
                {title}
              </h2>
              <ul className="text-white">
                {links.map(({ href, label }) => (
                  <li key={label} className="mb-4">
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-gray-200 dark:border-white sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-secondary sm:text-center">
          © 2023{" "}
          <FooterLink href="https://github.com/DBorhara">
            Depak Borhara
          </FooterLink>{" "}
          Free template. Not for resale or commercial use without explicit
          approval of Depak Borhara.
        </span>
        <div className="4 mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          {socials.map(({ name, href }) => (
            <Link
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              key={name}
              href={href}
            >
              <CustomSVG name={name} fillColor={secondary} />
              <span className="sr-only">
                {name.charAt(0).toUpperCase() + name.slice(1)} page
              </span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
