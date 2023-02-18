import React, { useState } from 'react'
import { CgMenuRound } from "react-icons/cg";

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);



  return (
    <div id="header" className="flex flex-row text-center  ">
      <button id="burger" onClick={() => setIsOpen(!isOpen)} className="font-DynaPuff text-blanco  hover:text-rosado">
        <CgMenuRound class="w-12 h-12 fixed" />
      </button>
      
      
      {isOpen === true ? (
        <div className='flex flex-row  ml-10 '>
          <a href="#Home" className="font-DynaPuff text-blanco px-5 hover:text-rosado ">Home</a>
          <a href="#Profile" className="font-DynaPuff text-blanco px-3 hover:text-rosado ">Profile</a>
          <a href="#MyWork" className="font-DynaPuff text-blanco px-3 hover:text-rosado ">My work</a>
          {/* <a href="#formulario" className="font-DynaPuff text-blanco px-5 hover:text-rosado m-1">Contacto</a> */}
        </div>
      )
        :null

      }
    </div>
  )
}

