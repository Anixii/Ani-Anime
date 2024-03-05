import Link from 'next/link'
import React from 'react'
import HeaderLinks from './HeaderLinks'

const Header = () => {
  return (
    <header className='h-20 fixed top-0 left-0 z-50 w-full sm:h-32'>
      <div className='flex h-full px-8 justify-center  items-center sm:justify-between'>
        <div className={'logo'}>
          <Link href={"/"}>AniAnime</Link>
        </div>
        <ul className='flex bottom-0 fixed sm:relative left-0 h-20 w-full bg-[#0f0f0f] shadow-[rgba(100,100,111,0.2) 0px 7px 29px 0px] items-center justify-between m-0 box-border px-7 list-none sm:items-center sm:w-auto sm:bg-transparent'>
          <HeaderLinks/>
        </ul>
      </div>
    </header>
  )
}

export default Header