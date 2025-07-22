

import Project from "../projects/project";
import FullStack from "./Full-stack/fullstack";
import Render from "./rendering/render";
import Render2 from "./rendering/render2";

import { useState } from "react";




export default function Skills() {
   const [showRender, setShowRender] = useState(false);
  const [showRender2, setShowRender2] = useState(false);
  const [fullStack ,setfullStack] = useState(true)

  
  function HandleClick(){
    setShowRender(true);
    setShowRender2(false);
    setfullStack(false);

  }

  function HandleClick2(){
   
    setShowRender2(true);
    setShowRender(false);
    setfullStack(false);
     

  }

  function handlefullstack(){
    setfullStack(true);
    setShowRender(false);
    setShowRender2(false);
  }
 
  return(


    <div className="flex flex-col items-center " id="skills">
      <div className="text-white font-normal text-2xl md:text-4xl my-5 space-x-3" >
        <span className="text-white font-medium text-2xl md:text-4xl">My</span>
        <span className="text-[#ff010f] font-medium text-2xl md:text-4xl">Talent</span>
        <span>Professional Skills</span>
      </div>
      
        <div class="flex flex-col md:flex-row space-x-5 font-bold">


          <div className="  flex md:flex-col flex-wrap">

            <button  className="flex p-3 rounded-xl mx-2 my-2 hover:scale-110 text-white bg-[#ff010f] hover:bg-[#ff010eca]"  onClick={() =>handlefullstack()}>
              <span>Full-Stack</span> 
            </button>
          </div>

          <div className="  flex md:flex-col flex-wrap">

            <button  className="flex p-3 rounded-xl mx-2 my-2 hover:scale-110 text-white bg-[#ff010f] hover:bg-[#ff010eca]"  onClick={() =>HandleClick2()}>
              <span>Front-end</span> 
            </button>
          </div>
         
           
          <div className="  flex md:flex-col flex-wrap">


           
            <button  className="flex p-3 rounded-xl mx-2 my-2 hover:scale-110 text-white bg-[#ff010f] hover:bg-[#ff010eca]" onClick={() => HandleClick()} >
              
              Back-End </button>
          
          </div>

        </div>

         <div className="md:w-[500px] w-[80vw] bg-[#1E1E1E] mt-2  rounded-lg pb-10 ">
           {showRender2 ? <Render2/>:null}
          
        {showRender ? <Render/>:null}

        {fullStack ? <FullStack/>:null}
       
            </div>
            
           <Project/>
    </div>
    
  )
}