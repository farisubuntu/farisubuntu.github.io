"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-queries";
import { Menu, X, Layers } from "lucide-react";
export type MenuItem = {
  label: string;
  link: string;
  active?: boolean;
};

export function Header({ menuList }: { menuList: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Layers className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Logo</span>
            </Link>
          </div>
          {isMobile ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          ) : (
            <nav className="hidden md:block">
              <ul className="flex space-x-4">
                {menuList.map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        item.active
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
      {isMobile && isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuList.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  item.active
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
