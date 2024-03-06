import Link from 'next/link'
import React from 'react'
import HeaderLinks from './HeaderLinks'
import { ModeToggle } from '../theme-provider/ToggleButton'

const Header = () => {
  return (
    <header className='hover:bg-[#0f0f0f] header transition-all duration-500 ease-out trans h-16 fixed top-0 left-0 z-50 w-full sm:h-24'>
      <div className='flex h-full px-8 justify-center  items-center sm:justify-between'>
        <div className={'logo'}>
          <Link className='text-white text-4xl font-bold' href={"/"}>AniAnime</Link>
        </div>
        <ul className='flex text-white bottom-0 bg-[#0f0f0f] fixed sm:relative left-0 h-20 w-full shadow-[rgba(100,100,111,0.2) 0px 7px 29px 0px] items-center justify-between m-0 box-border px-7 list-none sm:mr-10 sm:items-center sm:w-auto sm:bg-transparent'>
          <HeaderLinks/>
        </ul> 
        <div className='absolute right-5'> 
          <ModeToggle/>
        </div>
      </div>
    </header>
  )
}

export default Header