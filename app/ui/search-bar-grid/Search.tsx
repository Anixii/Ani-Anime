'use client'
import { Button } from '@/components/ui/button'
import { RefreshCcw, SearchIcon } from 'lucide-react'
import React from 'react'
import { DrawerDemo } from '../sidebar-catalog/SideBarDrawer'

const SearchGrid = () => {
  return (
    <article className='w-[100%] flex justify-center items-center'> 
        <div className='w-full sm:w-[98%] flex justify-between items-center flex-wrap gap-y-3'>
            <input placeholder='Search...' className='box-border py-2 pl-2 bg-transparent rounded-sm w-full sm:w-[48%] border  border-gray-300 dark:border-gray-600' type="text"/> 
            <Button className='flex items-center justify-between gap-x-1 font-bold' variant={'ghost'}><SearchIcon strokeWidth={'3px'} size={'16px'}/> Search</Button>
            <Button className='flex items-center justify-between gap-x-1 font-bold' variant={'ghost'}><RefreshCcw strokeWidth={'3px'} size={'16px'}/> Reset</Button> 
            <select className='bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2 px-2 dark:bg-[#0A0A0A] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '> 
                <option className='bg-zinc-950' value="POPULARITY_DESC">Popularity</option>
                <option value="SCORE_DESC">Rating</option>
                <option value="UPDATED_AT_DESC">Updated</option>
                <option value="EPISODES_DESC">Episodes</option>
                <option value="TRENDING_DESC">Trending</option>
            </select> 
            <DrawerDemo/>
        </div>
    </article>
  )
}

export default SearchGrid