"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 ${
        scrolled ? "pt-0" : "pt-8"
      }`}
    >
      <nav className="container mx-auto h-24 flex items-center justify-between border-b-2 border-white">
        <div className="flex items-center gap-4">
          <Image
            src="/terminal_box_line.svg"
            alt="Logo"
            width={28}
            height={28}
          />
          <h1 className={`text-xl font-mclaren`}>Felix Tessier</h1>
        </div>
        <nav>
          <ul className="flex gap-24 font-bold text-xl">
            <li>
              <Link
                href="/"
                className={`px-6 py-2 rounded-lg ${
                  pathname === "/" ? "bg-[#506ED8] text-white" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className={`px-6 py-2 rounded-lg ${
                  pathname === "/articles" ? "bg-[#506ED8] text-white" : ""
                }`}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`px-6 py-2 rounded-lg ${
                  pathname === "/projects" ? "bg-[#506ED8] text-white" : ""
                }`}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <Image src="/sun-line.svg" alt="" width={32} height={32} />
      </nav>
    </header>
  );
};

export default Header;
