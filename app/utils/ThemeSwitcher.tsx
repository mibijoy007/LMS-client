'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState<boolean>(false)
    const {theme, setTheme} = useTheme()

    // useEffect(() => {setMounted(true)}, [])
    
    // if(!mounted){
    //     return null;
    // }

  return (
    <div  className='mx-3 flex justify-center items-center'>
        {
            theme === 'light' ? (
                <BiMoon 
                className='cursor-pointer'
                size={25}
                fill='black'
                onClick={() =>{ setTheme('dark')}}
                />
            ) : (
                <BiSun 
                className='cursor-pointer'
                size={25}
                onClick={() =>{ setTheme('light')}}
                />
            )
        }

    </div>
  )
}

export default ThemeSwitcher