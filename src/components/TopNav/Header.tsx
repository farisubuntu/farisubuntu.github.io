"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-queries";
import { Menu, X, Layers } from "lucide-react";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/theme-toggler";
export type MenuItem = {
  label: string;
  link: string;
  active?: boolean;
};

export function Header({ menuList }: { menuList: MenuItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();

  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="shadow-md flex justify-between items-center px-3">
      <div className="container mx-4">
        <div className="flex items-center gap-5 h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Layers className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Logo</span>
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
              <ul className="flex space-x-4 ml-5">
                {menuList.map((item) => (
                  <li key={item.link}>
                    <Link
                      href={item.link}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        pathname === item.link
                          ? "!text-primary-foreground bg-primary"
                          : "hover:underline hover:font-bold hover:text-primary"
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
                  pathname === item.link
                    ? "text-primary bg-primary-foreground"
                    : "hover:underline hover:font-bold hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
