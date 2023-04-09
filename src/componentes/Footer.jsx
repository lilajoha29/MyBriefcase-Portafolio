import React from 'react'
import { SiLinkedin, SiGithub, SiWhatsapp, SiDiscord, SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className='' >
      <div className=" bg-rosado  blur h-2 m-auto mb-8 lg:flex"></div>
      <div className=' flex flex-col sm:grid sm:grid-cols-5 sm:justify-items-center '> 
        <div className="flex flex-col text-center m-auto pt-5 justify-center items-center sm:col-span-2 ">
          <h1 className="font-DynaPuff text-rosado text-2xl lg:text-4xl">Lily Johana</h1>
          <h1 className="font-DynaPuff text-rosado text-2xl lg:text-4xl">Castillo Forero</h1>
          <h2 className="font-DynaPuff text-blanco lg:text-xl">Soy desarrollador full stack.<br></br>Este sitio web es parte de mi progreso.</h2>
          {/* <h2 className="font-DynaPuff text-blanco lg:text-xl">I'am full stack developer.<br></br>   This website is part of my progress</h2> */}
        </div>
        <div className='flex justify-center items-center'>
          <img src="https://media.giphy.com/media/3ohhwokifK1wY7eZ8s/giphy.gif" className='w-24 h-24 '></img>
        </div>
        <div className="flex flex-col text-center m-auto pb-7 justify-center items-center sm:col-span-2">
          <h2 className="font-DynaPuff text-rosado text-2xl ">Contactame</h2>
          <div className="flex text-center items-center flex-row gap-3 m-auto">
            <a href="https://www.linkedin.com/in/lily-johana-castillo-forero-a2582667/" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado "><SiLinkedin className="text-2xl m-1 animate-pulse" /></a>
            <a href="https://github.com/lilajoha29" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><SiGithub className="text-2xl m-1 animate-pulse" /></a>
            <a href="https://api.whatsapp.com/send?phone=573103186284&text=mensaje" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><SiWhatsapp className="text-2xl m-1 animate-pulse" /></a>
            <a href="" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><SiDiscord className="text-2xl m-1 animate-pulse" /></a>
            <a href="" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><SiGmail className='text-2xl m-1 animate-pulse'/></a>
          </div>
        </div>    
      </div> 
    </footer>
  )
}


