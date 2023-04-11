import React, { useState } from 'react'
import { CgMenuRound } from "react-icons/cg";
import {ImHome2, ImProfile, ImCool, ImBubbles3} from "react-icons/im";


export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=' fixed top-0 right-0 z-40 bg-negro/50 backdrop-blur-sm py-2 w-full '>
      <section id="header" className="font-Poppins flex flex-row justify-evenly m-auto gap-3 px-2">
                          <a href="#Home" className="w-fit flex flex-col bg-pastel items-center p-2 rounded-md text-negro font-DynaPuff  hover:text-rosado hover:bg-blanco sm:w-full"><ImHome2 className='animate-pulse hover:animate-ping'/>Inicio</a>
                          <a href="#Profile" className="w-fit font-DynaPuff flex flex-col bg-pastel items-center p-2 rounded-md text-negro hover:text-rosado hover:bg-blanco sm:w-full"><ImProfile className='animate-pulse hover:animate-ping'/>
                          Perfil</a>
                          <a href="#MyWork" className="w-fit font-DynaPuff flex flex-col bg-pastel items-center p-2 rounded-md text-negro hover:text-rosado hover:bg-blanco sm:w-full"><ImCool className='animate-pulse hover:animate-ping'/>
                          Proyectos</a>
                          <a href="#form" className="w-fit font-DynaPuff flex flex-col bg-pastel items-center p-2 rounded-md text-negro hover:text-rosado hover:bg-blanco sm:w-full"><ImBubbles3 className='animate-pulse hover:animate-ping'/> Contacto</a>
                  </section>
    </nav>
  )
}

