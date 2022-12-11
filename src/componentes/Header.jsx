import React, { useState } from 'react'

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div id="header" className="flex flex-row text-center ">
      <button id="burger" onClick={()=> setIsOpen(!isOpen)} className="font-DynaPuff text-blanco px-5 hover:text-rosado">Inicio</button>
      <a href="#inicio" className="font-DynaPuff text-blanco px-5 hover:text-rosado">Inicio</a>
      <a href="#perfil" className="font-DynaPuff text-blanco px-5 hover:text-rosado">Perfil</a>
      <a href="#proyectos" className="font-DynaPuff text-blanco px-5 hover:text-rosado">Proyectos</a>
      <a href="#formulario" className="font-DynaPuff text-blanco px-5 hover:text-rosado">Contacto</a>
      {/* {isOpen === true ? (

      )
        : null

      } */}
    </div>
  )
}

