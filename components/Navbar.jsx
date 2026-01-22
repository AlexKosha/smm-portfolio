"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // для мобільного меню
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // підменю для мобільного
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    {
      href: "/services",
      label: "Services",
      subLinks: [
        { href: "/services/content", label: "Content Creation" },
        { href: "/services/analytics", label: "Analytics & Reporting" },
      ],
    },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 md:overflow-visible overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center ">
        {/* Логотип */}
        <h1 className="text-2xl font-bold text-pink-500">SMM Portfolio</h1>

        {/* Десктоп меню */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            if (link.subLinks) {
              return (
                <li key={link.href} className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-pink-500 transition">
                    {link.label} <ChevronDown size={16} />
                  </div>

                  <ul
                    className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-56 
                 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                 transition-all duration-200 z-50"
                  >
                    {link.subLinks.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-pink-500 transition ${
                    isActive ? "text-pink-500 font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Іконка бургера для мобільних */}
        <button
          className="md:hidden text-gray-700 hover:text-pink-500 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Мобільне меню */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 font-medium text-gray-700">
          {links.map((link) => {
            if (link.subLinks) {
              return (
                <li key={link.href} className="w-full">
                  <button
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    className="flex justify-between w-full px-6 py-2 hover:text-pink-500 transition"
                  >
                    {link.label} <ChevronDown size={16} />
                  </button>

                  {mobileServicesOpen && (
                    <ul className="flex flex-col w-full bg-gray-50">
                      {link.subLinks.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block px-6 py-2 hover:text-pink-500"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={link.href} className="w-full">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-6 py-2 hover:text-pink-500 transition"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
