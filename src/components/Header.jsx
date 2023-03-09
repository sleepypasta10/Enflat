import React from 'react';
import Logo from "../assets/images/logo.svg"

function Header({ children }) {
    return (
        <div className='flex justify-between w-[95%] items-center mx-auto mb-4'>
            <img src={Logo} className='text-4xl' />
            <div className='flex gap-2'>{children}</div>
        </div>
    )
}

export default Header
