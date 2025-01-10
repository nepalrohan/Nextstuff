"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const menus = [ {
    title:'Home',
    href:'/'
  },
  {
    title:'Blog',
    href:'/blog'
  },
  {
    title:'Login',
    href:'/login'
  },
  
  
  ]


const Layout = ({children}) => {

    const pathname = usePathname();

    const blacklists = [
        '/login',
        '/signup',
        '/admin'
    ]
    const isBlacklist = blacklists.includes(pathname);

    if (isBlacklist){
        return <div>
            {children}
        </div>
    }

  return (
    <div>

<nav className='bg-white shadow-lg sticky top-0 left-0 w-full py-4 flex justify-between items-center px-[5%]'>
<Link href={'/'} className='text-3xl font-bold text-slate-700'>Coding<span className='text-violet-600  text-lg font-bold'>hub</span></Link>
<div className='flex gap-16 items-center'>
{
  
  menus.map((item, index)=>{
    return <Link className={`font-medium p-2  ${item.href === pathname? 'text-violet-600 border-b border-violet-700':'text-slate-700'} `} href={item.href} key={index}>{item.title}</Link>
  })
}

<Link href='/signup' className='font-medium bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded'>Signup</Link>

</div>
     </nav>
     <section className='px-[5%] py-4'>

     {children}

     </section>
     <footer className='bg-violet-600 h-[250px] flex items-center justify-center'>
 
<h1 className='text-white text-2xl font-bold'>Footer</h1>
     </footer>
    </div>
  )
}

export default Layout