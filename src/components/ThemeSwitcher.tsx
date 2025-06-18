'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents hydration mismatch
  }

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <button onClick={handleTheme}>
      <Image
        src={theme === 'dark' ? '/sun-line.svg' : '/moon-stars-line.svg'}
        alt="Theme toggle"
        width={32}
        height={32}
      />
    </button>
  );
};

export default ThemeSwitcher;
