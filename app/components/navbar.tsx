import React, { useState } from "react";
import { useRouter } from "next/router";
import { TbAlignBoxRightBottomFilled } from "react-icons/tb";
import Link from "next/link";
import { BsLinkedin, BsTelegram, BsWhatsapp, BsGithub } from "react-icons/bs";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const isLinkActive = (href: string) => router.pathname === href;
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const menuElements = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/about",
      title: "About Me",
    },
  ];
  const menuItems = menuElements.map((item) => (
    <Link
      href={item.href}
      passHref
      key={item.href}
      className={`mx-auto text-base font-semibold lg:text-lg hover:bg-gray-200 hover:text-black transition duration-300 px-2 py-1 rounded ${
        isLinkActive(item.href) ? "bg-gray-300 underline text-black" : ""
      }`}
    >
      {item.title}
    </Link>
  ));
  const socialIcons = [
    {
      href: "https://www.linkedin.com/in/amiribraimov/",
      icon: <BsLinkedin size={34} />,
      text: "LinkedIn",
      color: "text-blue-700 hover:text-blue-600",
    },
    {
      href: "https://t.me/Amiracle17",
      icon: <BsTelegram size={34} />,
      text: "Telegram",
      color: "text-blue-500 hover:text-blue-400",
    },
    {
      href: "https://wa.me/+8107031371220",
      icon: <BsWhatsapp size={34} />,
      text: "WhatsApp",
      color: "text-green-500 hover:text-green-400",
    },
    {
      href: "https://github.com/amirqa17",
      icon: <BsGithub size={34} />,
      text: "GitHub",
      color: "text-gray-600 hover:text-gray-800",
    },
  ];
  
  const socialLinks = socialIcons.map((icon) => (
    <a
              href={icon.href}
              key={icon.href}
              className={`${icon.color} mx-auto transition-transform transform hover:scale-110`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Show text on mobile, and icon on desktop */}
              <span className="md:hidden">{icon.text}</span>
              <span className="hidden md:inline">{icon.icon}</span>
            </a>
  ));
  

  return (
    <nav className="bg-gray-100 text-black p-4 px-4 md:px-8 mb-8">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/*Logo*/}
        <Link
          href="/"
          passHref
          className="inline-flex items-center gap-2.5 text-xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <TbAlignBoxRightBottomFilled className="text-4xl" />/ Amir Ibraimov
        </Link>
        {/*Mobile menu toggle button*/}
        <button
          className="md:hidden pl-2"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        {/*Menu items desktop*/}
        <div className="hidden md:flex space-x-12">{menuItems}</div>

        {/*Social links*/}
        <div className="hidden md:flex space-x-4">{socialLinks}</div>
      </div>
      {/*Menu items mobile*/}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          {menuItems}
           {/*Social links mobile*/}
          {socialLinks}
        </div>
        
      )}
    </nav>
  );
};

export default Navbar;
