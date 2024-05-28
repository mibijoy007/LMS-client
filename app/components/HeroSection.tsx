
'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { BiSearch } from 'react-icons/bi'


interface HeroSectionProps{

}


// const HeroSection:FC<HeroSectionProps> = (props) => {
//     return (
//       <div className="flex">
//           <div className="">
//               {/* left section */}
//               <div className="">
//                   <Image 
//                   //  src={require("../../public/banner-img-1.png")}
//                    src="/banner-img-1.png"
//                    width={2379}
//                    height={1656}
//                    alt='Hero-Section-image'
//                    className='p-16  m-5 border-[0px] w-[80%]'
                  
//                   />
//                   <div className='rounded-full bg-green-500 '>

//                   </div>
//               </div>
//               {/* right section */}
//               <div className=''>
//                   <h2 className='dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px]            '>
//                       Improve Your Online Learning Experience 
//                   </h2>
//                   <br />
//                   <p className='dark:text-[#edfff4] text-[#000000ac7] text-[18px] font-[600] font-Josefin 1500px:!w-[55%] 1100px:!w-[78%]'>
//                       We have 50k+ online courses & 700k+ registered students. Find your desired course here 
//                   </p>
//                   <br />
//                   <br />
//                   <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative flex'>
//                       <input
//                        type='search'
//                        placeholder="Search Courses"
//                        className='bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-Josefin   px-2  '
//                       />
//                       <div className='absolute flex items-center justify-center w-[50px] cursor-pointer bg-red-600'>
//                           <BiSearch 
//                           size={30}
//                           className=''
//                           />
//                       </div>
//                   </div>
//                   <br />
//                   <br />
//                   <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center'>
//                       <Image
//                       src="/client-1.jpg"
//                       width={46}
//                       height={46}
//                       alt=''
//                       className='rounded-full'
//                       />
//                       <Image
//                       src="/client-2.jpg"
//                       width={46}
//                       height={46}
//                       alt=''
//                       className='rounded-full'
//                       /><Image
//                       src="/client-3.jpg"
//                       width={46}
//                       height={46}
//                       alt=''
//                       className='rounded-full'
//                       />
//                       <p className='font-Josefin font-[600] dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] '>
//                           700k+ People already trusted us.{" "}
  
//                           <Link
//                               href="/courses"
//                               className='dark:text-[#46e256 text-[crimson]'
//                           >
//                               View Courses
//                           </Link> {" "}     {/* for a little bit space */}
//                       </p>
//                   </div>
//                  <br />
//               </div>
  
//           </div>
//       </div>
//     )
//   }
  
//   export default HeroSection;



const HeroSection:FC<HeroSectionProps> = (props) => {
  return (
    <div className='w-full 1000px:flex items-center'>
        {/* <div className="absolute top-24 1000px:top-[unset] 1500px:h-[700px] 1500px:w-[700px]"> */}
            {/* left section */}
            <div className='1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10'>
                <Image 
                //  src={require("../../public/banner-img-1.png")}
                 src="/banner-img-1.png"
                 alt='Hero-Section'
                 width={2379}
                 height={1656}
                 className='object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-auto'
                
                />
            </div>
            {/* right section */}
            <div className='1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]'>
                <h2 className='text-5xl flex text-center h-auto  dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[60px]  font-[600] font-Josefin py-2 1000px:leading-[75px]         '>
                    Improve Your Online Learning Experience 
                </h2>
                <br />

                {/* dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[60px] text-center  font-[600] font-Josefin py-2 1000px:leading-[75px]          */}
                <p className='dark:text-[#edfff4] text-[#000000c7] text-[18px] font-[600] font-Josefin 1500px:!w-[55%] 1100px:!w-[78%] '>
                    We have 50k+ online courses & 700k+ registered students. Find your desired course here 
                </p>
                <br />
                <br />
                <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent flex'>
                    <input
                     type='search'
                     placeholder="Search Courses"
                     className='px-3 bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-l-lg w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-Josefin     '
                    />
                    {/* <div className='absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px]'> */}
                        <div className='bg-cyan-400 rounded-r-lg  flex justify-center items-center p-3 cursor-pointer bg-gradient-to-b from-cyan-300 to-cyan-600 '>

                        <BiSearch 
                        size={35}
                        className='text-white flex justify-center items-center'
                        />
                        </div>
                    {/* </div> */}
                </div>
                <br />
                <br />
                <div className='1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center'>
                    {/* <Image
                    src={require("../../public/client-1.jpg")}
                    alt=''
                    className='rounded-full'
                    />
                    <Image
                    src={require("../../public/client-2.jpg")}
                    alt=''
                    className='rounded-full'
                    /><Image
                    src={require("../../public/client-3.jpg")}
                    alt=''
                    className='rounded-full'
                    /> */}
                    <Image
                      src="/client-1.jpg"
                      width={46}
                      height={46}
                      alt=''
                      className='rounded-full'
                      />
                      <Image
                      src="/client-2.jpg"
                      width={46}
                      height={46}
                      alt=''
                      className='rounded-full'
                      /><Image
                      src="/client-3.jpg"
                      width={46}
                      height={46}
                      alt=''
                      className='rounded-full'
                      />
                    <p className='font-Josefin font-[600] dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] '>
                        700k+ People already trusted us.{" "}

                        <Link
                            href="/courses"
                            className='dark:text-[#46e256 text-[crimson]'
                        >
                            View Courses
                        </Link> {" "}     {/* for a little bit space */}
                    </p>
                </div>
               <br />
            </div>

        {/* </div> */}
    </div>
  )
}

export default HeroSection;

