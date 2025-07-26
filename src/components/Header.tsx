'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const pathname = usePathname();
  const [, setScrolled] = useState(false);
  const { theme, systemTheme } = useTheme();

  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)] mt-8">
      <nav
        className={`h-24 flex items-center justify-between border-b-2 
        ${resolvedTheme === 'light' ? 'border-black' : 'border-white'}`}
      >
        <Link
          href={'/'}
          className="flex items-center gap-4 hover:opacity-50 transition-opacity duration-300"
        >
          <Image
            src={
              resolvedTheme === 'dark'
                ? '/icons/terminal_box_line_light.svg'
                : '/icons/terminal_box_line_dark.svg'
            }
            alt="Logo"
            width={28}
            height={28}
            className="transition-opacity duration-300"
          />
          <p className={`text-xl font-mclaren`}>Felix Tessier</p>
        </Link>
        <nav className=" hidden lg:block">
          <ul className="flex gap-24 font-bold text-xl">
            <li>
              <Link
                href="/"
                className={`px-6 py-2 rounded-lg transition duration-200 ease-in-out
                  hover:bg-[#506ED8] hover:text-white hover:scale-105
                  ${pathname === '/' ? 'bg-[#506ED8] text-white' : ''}
                `}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`px-6 py-2 rounded-lg transition duration-200 ease-in-out
                  hover:bg-[#506ED8] hover:text-white hover:scale-105
                  ${pathname === '/articles' ? 'bg-[#506ED8] text-white' : ''}
                `}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`px-6 py-2 rounded-lg transition duration-200 ease-in-out
                  hover:bg-[#506ED8] hover:text-white hover:scale-105
                  ${pathname === '/projects' ? 'bg-[#506ED8] text-white' : ''}
                `}
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
