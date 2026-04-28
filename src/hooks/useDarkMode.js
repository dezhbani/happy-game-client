import { useState, useEffect } from 'react';

const useDarkMode = () => {
  // بررسی وضعیت اولیه از localStorage (اختیاری برای ذخیره تنظیمات)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    return !darkMode
  }

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
