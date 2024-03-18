import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type ErrorType = { 
    text:string, 
    img: any,  
    reset?:any
}
const ErrorCustom = ({img,text,reset}:ErrorType) => {
  return (
    <section className={'px-4, flex justify-center items-center min-h-[50vh] flex-col'}>
        <Image  className='error__img' src={img} alt="404 error icon" /> 
        <h2 className='my-8 text-3xl font-medium text-center'>{text}</h2>
        {reset && <Button className='mb-6'  size={'lg'} onClick={reset}>Try Again</Button>}
        <Link className='error__link' href={'/'}><Button variant={'secondary'} size={'lg'} >Go to Main Page</Button></Link> 
    </section>
  )
}

export default ErrorCustom