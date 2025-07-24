import React from 'react'
import Home from '../home/home'
import ScrollToTopButton from '../top'


export default function Navbar (){
  return (
    <div className='text-white m-3 p-2 '>
      <div className='p-3 '>
        <span className=' flex justify-center sm:space-x-5 space-x-20 font-bold  '>
          <a href=''><ul className=' pr-3 pl-3 pb-1.5 pt-1  font-bold bg-red-blur hover:bg-[#ff010f]  duration-200 rounded-lg sm:text-sm md:text-lg lg:text-xl '>Home</ul></a>
          <a href='#about'><ul className=' pr-3 pl-3 pb-1.5 pt-1 text-base font-bold bg-red-blur hover:bg-[#ff010f]  duration-200 rounded-lg sm:text-sm md:text-lg lg:text-xl'>About</ul></a>
          <a href='#skills'><ul className=' pr-3 pl-3 pb-1.5 pt-1 text-base font-bold bg-red-blur hover:bg-[#ff010f]  duration-200 rounded-lg sm:text-sm md:text-lg lg:text-xl'>Skills</ul></a>
          <a href='#project'><ul className=' pr-3 pl-3 pb-1.5 pt-1 text-base font-bold bg-red-blur hover:bg-[#ff010f]  duration-200 rounded-lg sm:text-sm md:text-lg lg:text-xl'>Projects</ul></a>
          <a href=''><ul className=' pr-3 pl-3 pb-1.5 pt-1 text-base font-bold bg-red-blur hover:bg-[#ff010f]  duration-200 rounded-lg sm:text-sm md:text-lg lg:text-xl'>Experiences</ul></a>
          
        </span>


        
        <Home/>
        <ScrollToTopButton/>


        
      </div>
    </div>
  )
}

