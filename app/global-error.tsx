'use client'
import icon from './assets/error.svg'
import ErrorCustom from "./ui/error/Error"

 // Error components must be Client Components
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
 
  return ( 
    <div className='mt-36'> 
    <ErrorCustom text="Sometiong went wrong..." reset={reset} img={icon}/>
    </div>
  )
}