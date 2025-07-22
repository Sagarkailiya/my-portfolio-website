import About from "../About/About";



export default function Home(){
  return(
    <div className="  m-1 px-30 py-5 pr-4 justify-center ">
      <div className="flex flex-row justify-center items-center">
        <div className=" flex flex-col  ">
        <div className=" flex text-[#B2B2B2] text-xl md:text-s ">HELLO , MY NAME IS</div>
        <div className=" flex text-5xl font-bold pt-2 space-x-3.5">
          <span className=" flex text-[#ff010f]  " >SAGAR </span>
          <span>KAILIYA</span>
        </div>
        <div className=" flex m-1 pt-2  "><span className="text-[#B2B2B2] text-xl">WEB DEVELOPER</span> </div>
        <div className=" flex m-1 p-1  ">
        <p className="text-white md:w-[50vw] mb-3 line-clamp-8">With over a year of hands-on experience in Flutter, I specialize in creating intuitive, responsive, and user-friendly mobile applications. My skill set extends to building interactive and visually appealing web interfaces, backed by a solid understanding of modern development practices. As a final-year BTech student. My work reflects a commitment to delivering high-quality, scalable solutions that enhance user experiences. With a drive for innovation and a goal to work on international projects, I aim to bring creativity and technical excellence to everything I build.</p>
        </div>
        <div className="flex m-1 p-1 space-x-5 ">
         <a href="SAGAR KAILIYA (1).pdf"> <button class="flex font-bold text-white bg-[#ff010f]
          rounded hover:cursor-pointer p-2 ">Download Resume</button></a>
          <button className="flex font-bold text-white border border-solid border-[#ff010f] rounded p-2 hover:cursor-pointer">Contact me</button>
        </div>
        <div className="flex p-4 ">
          <ul className=" flex space-x-4">
            <a href="https://github.com/Sagarkailiya">
            <li className="flex h-15 bg-red-600 rounded-md hover:cursor-pointer border border-[#ff010f]"><img src="github.png" alt="Github-image"  /></li>
            </a>
            
            <a href="https://www.linkedin.com/in/sagar-kailiya-93a323310/">
            <li className="flex h-15 bg-red-600 rounded-md  hover:cursor-pointer border border-[#ff010f] "><img src="linkedin.png" alt="Linkedin-image" /></li>
            </a>

            <a href="mailto:palsagar033@gmail.com" target="_blank">
              <li className="flex h-15 bg-[#ff010f] rounded-xl hover:cursor-pointer border border-[#ff010f]"><img src="apple.png" alt="Email-image" /></li>
            </a>
            <a href="tel:+919027267411" target="_blank">
              <li className="flex h-15 bg-[#ff010f] rounded-xl hover:cursor-pointer border border-[#ff010f]"><img src="telephone.png" alt="Contact-image" /></li>
            </a>
          </ul>
        </div>
       
        </div>
        <div className="flex  m-1 p-1 h-94 w-980"><img src="portfolio.jpg" alt="dff" /></div>
        
      </div>
      <About/>
    </div>
  )
}