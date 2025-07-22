import Skills from "../Skills/skills";

export default function About(){
  return(
    <div className="flex pt-10 justify-center items-center space-x-5 flex-col " id="about">
      <div className=" flex space-x-2 font-bold text-4xl ">
        <span  className="text-[#ff010f]">About </span>
        <span>Me</span>
      </div>
      <div className="flex space-x-2 font-bold text-4xl pt-2">
        <span >Web </span>
        <span className="text-[#ff010f]">Development</span>
      </div>
      <div className="flex text-[#B2B2B2] pt-6 justify-center items-center text-center  px-20">
        <span>More than 1 year of Experience in the development of software and solutions. A conscientious person who pays attention to details. Very passionate about software development, always willing and ready to learn new things/concepts. Proven leader with the ability to streamline development processes to drive the achievement of organisational objectives.</span>
      </div>
      
      <div>
      <div className="flex text-[#B2B2B2] flex-row pt-6 space-x-5 ">
        <img src="check.png" alt=""  className="h-7"/>
        <span className=" flex text-[#B2B2B2]">Skilled in developing highly interactive front-end user interfaces for web applications using technologies like React.js.</span>
      </div>
        
      <div className="flex text-[#B2B2B2] flex-row pt-6 space-x-5">
        <img src="check.png" alt=""  className="h-7"/>
        <span className=" flex text-[#B2B2B2]">Proficient in creating and managing backend functionalities for web and mobile applications.</span>
      </div>

      <div className="flex text-[#B2B2B2] flex-row pt-6 space-x-5">
        <img src="check.png" alt=""  className="h-7"/>
        <span className=" flex text-[#B2B2B2]">Over 1 year of experience in Flutter, building cross-platform mobile applications.</span>
      </div>

      <div className="flex text-[#B2B2B2] flex-row pt-6 space-x-5">
        <img src="check.png" alt=""  className="h-7"/>
        <span className=" flex text-[#B2B2B2]">Familiar with automation processes to streamline workflows and improve efficienc6</span>
      </div>
      </div>
      <Skills/>
      
    </div>

  )
}