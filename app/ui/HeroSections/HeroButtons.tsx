import { Button } from '@/components/ui/button'
import { BookOpen, BookOpenText, Play } from 'lucide-react'
import React from 'react'

const HeroButtons = () => {
  return (
    <article className='flex  gap-5 flex-wrap'> 
        <div><Button size={'lg'} className='flex items-center gap-x-1' variant={'default'}><BookOpenText size={21} strokeWidth={1.75} /> {' '} Learn More</Button></div>
        <div><Button size={'lg'} className='flex items-center gap-x-1' variant={'secondary'}><Play size={18}  strokeWidth={1.75} /> Watch Trailer</Button></div>
    </article>
  )
}

export default HeroButtons