
import Link from 'next/link';
import React, { FC } from 'react'

const NavItemsData = [
    {
        title: "Home",
        url: "/"
    },
    {
        title: "Courses",
        url: "/courses"
    },
    {
        title: "About Us",
        url: "/about-us"
    },
    {
        title: "Contact",
        url: "/contact"
    },
    
    

]

interface Props{
    activeItem: number;
    isMobile: boolean;
}

const NavItems:FC<Props> = ({activeItem,isMobile}) => {
  return (
    <>
    <div>
        { NavItemsData && NavItemsData.map((item,index)=>(
            <Link href={item.url} key={index} passHref>
                <span className={`${ activeItem === index ?
                    "dark:text-[#37a30a] text-[crimson]"
                    : "dark:text-white text-black"
                } text-[18px] px-6 font-Poppins font-[400]`}
                >
                {item.title}
                </span>
            </Link>
        ))}

    </div>

    { isMobile && (
        <div className='800px:hidden mt-5'>
            { NavItemsData && NavItemsData.map((item,index)=>(
            <Link href={item.url} key={index} passHref>
                <span className={`${
                    activeItem === index ?
                    "dark:text-[#37a30a] text-[crimson]"
                    : "dark:text-white text-black"
                }block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                >
                {item.title}
                </span>
            </Link>
        ))}
            </div>

        
    )}
    </>
  )
}

export default NavItems