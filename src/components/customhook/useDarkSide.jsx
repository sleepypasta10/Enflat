import React, { useEffect, useState } from 'react'

const useDarkSide = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    // const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        document.body.classList.remove(savedTheme);
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
  return [theme, setTheme]
}

export default useDarkSide;
