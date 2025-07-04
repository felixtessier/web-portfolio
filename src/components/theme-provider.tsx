'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
