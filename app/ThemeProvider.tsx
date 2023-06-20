'use client';

import { NextPage } from 'next';
import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode;
}

const ThemeProvider: NextPage<Props> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [setIsDarkMode]);

  return <div className={isDarkMode ? 'dark' : ''}>{children}</div>;
};

export default ThemeProvider;
