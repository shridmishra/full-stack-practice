import React, { useEffect, useState } from 'react';

export const Theme = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Set the initial theme
    if (mediaQuery.matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    // Listener for changes
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return <p>You are using {theme} mode.</p>;
};
