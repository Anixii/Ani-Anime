import Image from 'next/image'
import React from 'react' 
import HeroButtons from './HeroButtons'
import './HeroSection.css'
// import img from './main.jpg'
const HeroSection = () => {
  return (
    <div className='h-[60vh] md:h-[65vh] xl:h-[75vh] 2xl:h-[85vh]'> 
      <section className={`hero__section flex items-center`} > 
        <div className='px-4 xl:px-20 2xl:px-28 w-full flex items-center'>
          <div className='w-full md:w-1/2 mr-8  text-white'> 
            <h1  className='hero__section_title text-[2.2rem] md:text-[2.8rem] xl:text-[3.6rem] 2xl:text-[4.6rem] font-bold'>Jujutsu Kaisen</h1>
            <p className='hero__section_subtitle my-8 text-[1rem] font-semibold leading-6'>Idly indulging in baseless paranormal activities with the Occult Club,<br /> high schooler Yuuji Itadori spends his days at ...</p>
            <div  className='hero__section_btns'> 
            <HeroButtons/>
            </div>
          </div>
          <div className='hidden  md:block md:w-1/2 '> 
            <Image className='rounded-xl  banner brightness-75' src={'https://cdn.myanimelist.net/images/anime/1171/109222l.webp'} width={295} height={388} alt='banner of JJK'/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection