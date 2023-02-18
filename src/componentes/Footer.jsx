import React from 'react'
import { SiLinkedin, SiGithub, SiWhatsapp, SiDiscord, SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer >
      <div className=" bg-rosado  blur h-2 m-auto mb-8 lg:flex"></div>
      <div className='lg:flex lg:flex-row '> 
        <div className="flex flex-col text-center m-auto pt-5 lg:w-96 ">
          <h1 className="font-DynaPuff text-rosado text-2xl lg:text-4xl">Lily Johana Castillo Forero</h1>
          <h2 className="font-DynaPuff text-blanco lg:text-xl">I'am full stack developer.<br></br>   This website is part of my progress</h2>
        </div>
        <div className="flex flex-col text-center py-5 m-auto">
          <h2 className="font-DynaPuff text-rosado text-lg lg:text-xl">Menu</h2>
          <a href="#Home" className="font-DynaPuff text-blanco hover:text-rosado lg:text-lg">Home</a>
          <a href="#Profile" className="font-DynaPuff text-blanco hover:text-rosado lg:text-lg">Profile</a>
          <a href="#MyWork" className="font-DynaPuff text-blanco hover:text-rosado lg:text-lg">My work</a>
          {/* <a href="#Form" className="font-DynaPuff text-blanco hover:text-rosado lg:text-lg">Formulario</a> */}
        </div>
        <div className="flex flex-col text-center m-auto pb-7">
          <h2 className="font-DynaPuff text-rosado text-lg lg:text-xl">Contact me</h2>
          <div className="flex text-center items-center flex-col m-auto">
            <a href="https://www.linkedin.com/in/lily-johana-castillo-forero-a2582667/" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><SiLinkedin className="w-5 lg:w-6  m-1" /> Lily Johana Castillo Forero</a>
            <a href="https://github.com/lilajoha29" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><SiGithub className="w-5 lg:w-6 m-1" />lilajoha29</a>
            <a href="https://api.whatsapp.com/send?phone=573103186284&text=mensaje" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><SiWhatsapp className="w-5 lg:w-6 m-1" />+57 3103186284</a>
            <a href="" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><SiDiscord className="m-1" /> Lily Johana#3761</a>
            <a href="" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><SiGmail className='m-1'/> lilajoha2907@gmail.com</a>
          </div>
        </div>    
      </div> 
    </footer>
  )
}


