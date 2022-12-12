import React, { useState } from 'react'

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div id="header" className="flex flex-row text-center ">
      <button id="burger" onClick={()=> setIsOpen(!isOpen)} className="font-DynaPuff text-blanco px-5 hover:text-rosado"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      </button>
      
      
      {isOpen === true ? (
        <div className='flex flex-col sm:flex-row'>
          <a href="#Home" className="font-DynaPuff text-blanco px-5 hover:text-rosado m-1">Home</a>
          <a href="#Profile" className="font-DynaPuff text-blanco px-5 hover:text-rosado m-1">Profile</a>
          <a href="#MyWork" className="font-DynaPuff text-blanco px-5 hover:text-rosado m-1">My work</a>
          {/* <a href="#formulario" className="font-DynaPuff text-blanco px-5 hover:text-rosado m-1">Contacto</a> */}
        </div>
      )
        :null

      }
    </div>
  )
}

