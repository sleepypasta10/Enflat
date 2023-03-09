import React from 'react';
import SearchIcon from '../assets/images/icon-search.svg'

function SearchBar({onChange, value, searchWord, submitWord}) {


  return (
    <form action='' className='w-full' onSubmit={submitWord}>
      <div className='relative'>
        <input
          id='search-input'
          className='bg-[#f4f4f4] text-[#2d2d2d] rounded-2xl w-full h-16 outline-none border-none p-4 font-bold text-lg leading-6 pr-12 focus:outline-3 focus:outline-[#a445ed] caret-[#a445ed] dark:bg-[#2d2d2d] dark:text-white'
          onChange={(e) => onChange(e)}
          value={value}
          placeholder='Search for any word…'
        />
        <img
          className='absolute right-8 top-5 bg-red w-6 h-6'
          src={SearchIcon}
          alt='Search Icon'
          onClick={searchWord}
        />
      </div>
      </form>
  )
}

export default SearchBar
