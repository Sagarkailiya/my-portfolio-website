
import React, { useState } from 'react'

export default function Project (){

  
  const [button,setbutton]=useState(false)
  const [button2,setbutton2]=useState(false)
  const [button3,setbutton3]=useState(false)
  const [button4,setbutton4]=useState(false)
  const [button5,setbutton5]=useState(false)
  const [button6,setbutton6]=useState(false)


  

  function handleclick(){
    setbutton((prevState) => !prevState);
    
  }

   function handleclick2(){
    setbutton2((prevState) => !prevState);
    
  }

  
   function handleclick3(){
    setbutton3((prevState) => !prevState);
    
  }

  
   function handleclick4(){
    setbutton4((prevState) => !prevState);
    
  }

  
   function handleclick5(){
    setbutton5((prevState) => !prevState);
    
  }

  
   function handleclick6(){
    setbutton6((prevState) => !prevState);
    
  }


  return (
    <div>
     <div className=' flex flex-wrap p-5 justify-center items-center  '>
        <div className='pt-3 '>
          <span className='text-4xl font-bold '>Explore My Popular </span>
          <span className='text-4xl font-bold text-[#ff010f]'> Projects </span>
        </div>
      </div>



      <div className='flex flex-row flex-wrap space-x-4  '>




    <div className='flex flex-col md:flex-row pt-6'>
      <div className='flex bg-[#1E1E1E] rounded-2xl flex-col p-3  border-2 border-black hover:border-[#ff010f] transition-300 ease-in-out '>
        <div className='flex font-medium  text-xl pr-10 justify-between'>
           <span className=' pr-20 '>Portfolio Website</span>
        
            <a href=""><span className='flex bg-[#ff010f]  rounded-2xl text-xs pl-2 pr-2 justify-center  pt-2 pb-1.5'> Pet Projects </span></a>
        </div>

              <div className='flex flex-wrap pb-40 pt-3'>

                {button ? <ul className='flex flex-row space-x-4'>
                <li  className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>React-JS</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>HTML</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>TAILWIND-CSS</li></ul>
                : 
                <p className='flex '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>}

              </div>

        <div className='flex flex-row justify-end space-x-5 '>
             <img src="skills.png" alt="ddddddd" className=' h-10 w-10  ' onClick={()=>handleclick()}/>
             <a href=''><img src="arrow.png" alt="sasa" className='h-10 w-10 -rotate-90 hover:bg-red-600 rounded-xl'/></a>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row pt-6'>
      <div className='flex bg-[#1E1E1E] rounded-2xl flex-col p-3  border-2 border-black hover:border-[#ff010f] transition-300 ease-in-out '>
        <div className='flex font-medium  text-xl pr-10 justify-between'>
           <span className=' pr-20 '>Portfolio Website</span>
        
            <a href=""><span className='flex bg-[#ff010f]  rounded-2xl text-xs pl-2 pr-2 justify-center  pt-2 pb-1.5'> Pet Projects </span></a>
        </div>

              <div className='flex flex-wrap pb-40 pt-3'>

                {button2 ? <ul className='flex flex-row space-x-4'>
                <li  className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>React-JS</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>HTML</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>TAILWIND-CSS</li></ul>
                : 
                <p className='flex '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>}

              </div>

        <div className='flex flex-row justify-end space-x-5 '>
             <img src="skills.png" alt="ddddddd" className=' h-10 w-10  ' onClick={()=>handleclick2()}/>
             <a href=''><img src="arrow.png" alt="sasa" className='h-10 w-10 -rotate-90 hover:bg-red-600 rounded-xl'/></a>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row pt-6'>
      <div className='flex bg-[#1E1E1E] rounded-2xl flex-col p-3  border-2 border-black hover:border-[#ff010f] transition-300 ease-in-out '>
        <div className='flex font-medium  text-xl pr-10 justify-between'>
           <span className=' pr-20 '>Portfolio Website</span>
        
            <a href=""><span className='flex bg-[#ff010f]  rounded-2xl text-xs pl-2 pr-2 justify-center  pt-2 pb-1.5'> Pet Projects </span></a>
        </div>

              <div className='flex flex-wrap pb-40 pt-3'>

                {button3 ? <ul className='flex flex-row space-x-4'>
                <li  className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>React-JS</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>HTML</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>TAILWIND-CSS</li></ul>
                : 
                <p className='flex '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>}

              </div>

        <div className='flex flex-row justify-end space-x-5 '>
             <img src="skills.png" alt="ddddddd" className=' h-10 w-10  ' onClick={()=>handleclick3()}/>
             <a href=''><img src="arrow.png" alt="sasa" className='h-10 w-10 -rotate-90 hover:bg-red-600 rounded-xl'/></a>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row pt-6'>
      <div className='flex bg-[#1E1E1E] rounded-2xl flex-col p-3  border-2 border-black hover:border-[#ff010f] transition-300 ease-in-out '>
        <div className='flex font-medium  text-xl pr-10 justify-between'>
           <span className=' pr-20 '>Portfolio Website</span>
        
            <a href=""><span className='flex bg-[#ff010f]  rounded-2xl text-xs pl-2 pr-2 justify-center  pt-2 pb-1.5'> Pet Projects </span></a>
        </div>

              <div className='flex flex-wrap pb-40 pt-3'>

                {button4 ? <ul className='flex flex-row space-x-4'>
                <li  className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>React-JS</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>HTML</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>TAILWIND-CSS</li></ul>
                : 
                <p className='flex '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>}

              </div>

        <div className='flex flex-row justify-end space-x-5 '>
             <img src="skills.png" alt="ddddddd" className=' h-10 w-10  ' onClick={()=>handleclick4()}/>
             <a href=''><img src="arrow.png" alt="sasa" className='h-10 w-10 -rotate-90 hover:bg-red-600 rounded-xl'/></a>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row pt-6'>
      <div className='flex bg-[#1E1E1E] rounded-2xl flex-col p-3  border-2 border-black hover:border-[#ff010f] transition-300 ease-in-out '>
        <div className='flex font-medium  text-xl pr-10 justify-between'>
           <span className=' pr-20 '>Portfolio Website</span>
        
            <a href=""><span className='flex bg-[#ff010f]  rounded-2xl text-xs pl-2 pr-2 justify-center  pt-2 pb-1.5'> Pet Projects </span></a>
        </div>

              <div className='flex flex-wrap pb-40 pt-3'>

                {button5 ? <ul className='flex flex-row space-x-4'>
                <li  className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>React-JS</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>HTML</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>TAILWIND-CSS</li></ul>
                : 
                <p className='flex '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>}

              </div>

        <div className='flex flex-row justify-end space-x-5 '>
             <img src="skills.png" alt="ddddddd" className=' h-10 w-10  ' onClick={()=>handleclick5()}/>
             <a href=''><img src="arrow.png" alt="sasa" className='h-10 w-10 -rotate-90 hover:bg-red-600 rounded-xl'/></a>
        </div>
      </div>
    </div>

    <div className='flex flex-col md:flex-row pt-6'>
      <div className='flex bg-[#1E1E1E] rounded-2xl flex-col p-3  border-2 border-black hover:border-[#ff010f] transition-300 ease-in-out '>
        <div className='flex font-medium  text-xl pr-10 justify-between'>
           <span className=' pr-20 '>Portfolio Website</span>
        
            <a href=""><span className='flex bg-[#ff010f]  rounded-2xl text-xs pl-2 pr-2 justify-center  pt-2 pb-1.5'> Pet Projects </span></a>
        </div>

              <div className='flex flex-wrap pb-40 pt-3'>

                {button6 ? <ul className='flex flex-row space-x-4'>
                <li  className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>React-JS</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>HTML</li>
                <li className='text-xs font-semibold bg-red-600 p-1 px-3 rounded-3xl'>TAILWIND-CSS</li></ul>
                : 
                <p className='flex '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>}

              </div>

        <div className='flex flex-row justify-end space-x-5 '>
             <img src="skills.png" alt="ddddddd" className=' h-10 w-10  ' onClick={()=>handleclick6()}/>
             <a href=''><img src="arrow.png" alt="sasa" className='h-10 w-10 -rotate-90 hover:bg-red-600 rounded-xl'/></a>
        </div>
      </div>
    </div>




    </div>



    


  </div>
  )
}

