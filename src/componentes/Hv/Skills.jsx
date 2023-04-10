import React from 'react'
import {ImBubbles3, ImFire, ImBubble2, ImCheckmark2} from "react-icons/im";
import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail, SiGooglemaps } from "react-icons/si";

export const Skills = () => {
  return (
    <div>
        <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 
      <div className='my-5 md:mx-2' >
        <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Contacto<ImBubbles3 className='m-1' /></h2>
        <a href="https://api.whatsapp.com/send?phone=573103186284&text=mensaje" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado my-2"><SiWhatsapp className="text-2xl mx-5" />+57 310 318 6284</a>
        <a href="" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado my-2"><SiGmail className='text-2xl mx-5 '/>lilajoha2907@gmail.com</a>
        <a href="https://www.linkedin.com/in/lily-johana-castillo-forero-a2582667/" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado my-2"><SiGooglemaps className="text-2xl mx-5" />Bogotá - Colombia</a>
        <a href="https://www.linkedin.com/in/lily-johana-castillo-forero-a2582667/" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado my-2"><SiLinkedin className="text-2xl mx-5" />@lily-johana-castillo-forero</a>
        <a href="https://github.com/lilajoha29" className="font-DynaPuff text-blanco flex text-center hover:text-rosado my-2"><SiGithub className="text-2xl mx-5" />@lilajoha29</a>
      </div>
        <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 
        <div className='my-5 md:mx-2'>
            <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Skills <ImFire className='m-1'/></h2>
            <div className='grid grid-cols-3 mx-5'>
                <p className='font-DynaPuff text-blanco' >HTML</p>
                <p className='font-DynaPuff text-blanco' >CSS</p>
                <p className='font-DynaPuff text-blanco'>JavaScript</p>
                <p className='font-DynaPuff text-blanco col-span-2'>Tailwind-CSS</p>
                <p className='font-DynaPuff text-blanco'>GitHub</p>
                <p className='font-DynaPuff text-blanco'>Trello</p>
                <p className='font-DynaPuff text-blanco'>Figma</p>
                <p className='font-DynaPuff text-blanco'>NodeJS</p>
                <p className='font-DynaPuff text-blanco'>ReactJS</p>
                <p className='font-DynaPuff text-blanco'>MongoDB</p>
                {/* <p className='font-DynaPuff text-blanco'>Express</p> */}
                <p className='font-DynaPuff text-blanco'>MySQL</p> 
                        
            </div>    
      </div>
      <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 

      <div className='my-5 md:mx-2' >
        <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Intereses<ImCheckmark2 className='m-1'/></h2>
        <div className="mx-5">
          <p className='font-DynaPuff text-blanco'>Diseño UX -UI</p>
          <p className='font-DynaPuff text-blanco'>Análisis de datos</p>
          <p className='font-DynaPuff text-blanco'>Animaciones web</p>
        </div>
      </div>

      <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 

      <div className='my-5 pb-5 md:mx-2'>
        <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Lenguajes <ImBubble2 className='m-1'/></h2>
        <div className="mx-5">
          <p className='font-DynaPuff text-blanco'>Inglés - Básico</p>
          <p className='font-DynaPuff text-blanco'>Español - Nativo</p>
        </div>
      </div>
    </div>
  )
}
