import React, { useState } from 'react'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div id="header" class="flex flex-row text-center ">
      <button id="burger" onClick={()=> setIsOpen(!isOpen)} class="font-DynaPuff text-blanco px-5 hover:text-rosado">Inicio</button>
      <a href="#inicio" class="font-DynaPuff text-blanco px-5 hover:text-rosado">Inicio</a>
      <a href="#perfil" class="font-DynaPuff text-blanco px-5 hover:text-rosado">Perfil</a>
      <a href="#proyectos" class="font-DynaPuff text-blanco px-5 hover:text-rosado">Proyectos</a>
      <a href="#formulario" class="font-DynaPuff text-blanco px-5 hover:text-rosado">Contacto</a>
      {/* {isOpen === true ? (

      )
        : null

      } */}
    </div>
  )
}

export default Header