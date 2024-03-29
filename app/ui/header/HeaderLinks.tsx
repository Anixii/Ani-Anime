'use client'
import { headerNav } from "@/app/lib/constance/consts";
import Link from "next/link";
import { usePathname,  } from 'next/navigation'
import React from "react";

const HeaderLinks = () => { 
    const router = usePathname(); 
    
  return (
    <>
      {headerNav.map((item, index) => (
        <li
          className="text-[1rem] ml-0 font-bold transition-all  sm:ml-8 relative sm:text-[1.3rem] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-[rgb(6,193,73)] after:translate-x-[-50%] hover:after:w-full"
          key={index}
        >
          <Link prefetch={false} className={`no-underline flex flex-col items-center ${router === item.path ? "text-[rgb(6,193,73)]" : ""} `} href={item.path}> 
            <item.icon size={'19px'} className="block sm:hidden" />
            {item.display}
          </Link>
        </li>
      ))}
    </>
  );
};

export default HeaderLinks;
