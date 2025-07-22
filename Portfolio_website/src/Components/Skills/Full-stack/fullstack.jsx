
const people = [
  {id:1,
    type:"frontend",
    imgurl:"html",
    name:"Html"
    },

    {id:2,
    type:"frontend",
    imgurl:"css-3",
    name:"CSS"
    },

    {id:3,
    type:"frontend",
    imgurl:"js",
    name:"Javascript"
    },

    {id:4,
    type:"frontend",
    imgurl:"react",
    name:"React"
    },

    {id:5,
    type:"backend",
    imgurl:"node-js",
    name:"NodeJs"
    },

    {id:6,
    type:"backend",
    imgurl:"express-js",
    name:"Expressjs"
    },

    {id:6,
    type:"backend",
    imgurl:"mongo",
    name:"Mongodb"
    },
 
    

];




export default function FullStack(){


  function Handleimageurl(Iconurl){
    return(
      Iconurl.imgurl +".png"
    )
  }
    const person = people.map( Iconurl=>
      <li className=" py-2 px-4 shadow-lg bg-black flex flex-col rounded-lg items-center m-3  w-22 h-20 "><img src={Handleimageurl(Iconurl)} alt="" /> {Iconurl.name}</li>
     )
    
    return (
      <ul className="text-white flex flex-wrap">{person}</ul>
    )
  }
  







 