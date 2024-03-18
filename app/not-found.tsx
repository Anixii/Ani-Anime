import ErrorCustom from "./ui/error/Error";
import icon from './assets/error.svg'
export default function NotFound() {
  return (
    <div className='mt-36'> 
    <ErrorCustom text="Page Not Found" img={icon}/>
    </div>
  )
}