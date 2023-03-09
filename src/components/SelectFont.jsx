import React, { useState } from 'react';
import useFontSelect from './customhook/useFontSelect';

function SelectFont() {
  const [font, setFont] = useFontSelect();
  const [openDropDown, setOpenDropDown] = useState(false);

  const option = [
    {
      font: 'Sans-serif',
      value: 'Sans-serif'
    },
    {
      font: 'Serif',
      value: 'Serif'
    },
    {
      font: 'Monospace',
      value: 'Monospace'
    }
  ]

  const handleFont = (newFont) => {
    setFont(newFont)
  }
  return (
    <div className='relative inline-block rounded-sm border-none dark:text-white dark:bg-black'>
      <div className='w-full flex justify-between gap-2 dark:text-white dark:bg-black items-center py-[10px] px-2 m-0 font-bold leading-5 text-[16px] bg-white rounded-sm cursor-pointer'
        onClick={() => setOpenDropDown(!openDropDown)}
      >
        {font}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8">
          <path
            fill="none"
            stroke="#A445ED"
            stroke-width="1.5"
            d="m1 1 6 6 6-6" />
        </svg>
        {openDropDown && (
          <ul className={`absolute top-full left-0 text-[16px] font-bold leading-6 bg-white rounded-sm list-none z-10 focus:shadow-lg focus:shadow-[var(--color-primary)] dark:text-[#ffffff] dark:bg-[#050505] ${openDropDown ? "shadow-lg shadow-[var(--color-primary)]" : ""
            }`}
          >
            {option.map((item) => (
              <li
                key={item.value}
                className={`hover:text-[var(--color-primary)] block py-[10px] px-5 cursor-pointer `}
                onClick={() => handleFont(item.value)}
              >
                {item.font}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SelectFont
