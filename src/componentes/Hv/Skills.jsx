import React from 'react'
import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail, SiGooglemaps, SiHtml5, SiTailwindcss, SiCss3, SiJavascript, SiTrello, SiFigma, SiNodedotjs, SiReact, SiMongodb, SiMysql} from "react-icons/si";
import {GiBrain, GiFruitTree, GiChatBubble, GiDiscussion, GiCrosshairArrow} from "react-icons/gi";

export const Skills = () => {
  return (
    <div>
        <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 
      <div className='my-5 md:mx-2' >
        <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Contacto<GiChatBubble className='m-1 animate-pulse hover:animate-ping' /></h2>
        <a href="https://api.whatsapp.com/send?phone=573103186284&text=mensaje" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado my-2 w-fit"><SiWhatsapp className="text-2xl mx-5 animate-pulse " />+57 310 318 6284</a>
        <a href="mailto:lilajoha2907@gmail.com" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado my-2 w-fit"><SiGmail className='text-2xl mx-5 animate-pulse'/>lilajoha2907@gmail.com</a>
        <a href="https://api.whatsapp.com/send?phone=573103186284&text=mensaje" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado my-2 w-fit"><SiGooglemaps className="text-2xl mx-5 animate-pulse " />Bogotá - Colombia</a>
        <a href="https://www.linkedin.com/in/lily-johana-castillo-forero-a2582667/" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado my-2 w-fit"><SiLinkedin className="text-2xl mx-5 animate-pulse " />@lily-johana-castillo-forero</a>
        <a href="https://github.com/lilajoha29" className="font-DynaPuff text-blanco flex text-center hover:text-rosado my-2 w-fit"><SiGithub className="text-2xl mx-5 animate-pulse " />@lilajoha29</a>
      </div>
        <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 
        <div className='my-5 md:mx-2'>
            <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Skills <GiBrain className='m-1 animate-pulse hover:animate-ping'/></h2>
            <div className='grid grid-cols-3 mx-5 gap-3 animate-pulse'>
                <SiHtml5 alt="Html5" className='text-blanco text-2xl animate-pulse' />
                <SiCss3 className='text-blanco text-2xl animate-pulse'/>
                <SiJavascript className='text-blanco text-2xl animate-pulse'/>
                <SiTailwindcss className='text-blanco text-2xl animate-pulse'/>  
                <SiGithub className='text-blanco text-2xl animate-pulse'/>
                <SiTrello className='text-blanco text-2xl animate-pulse'/>
                <SiFigma className='text-blanco text-2xl animate-pulse'/>
                <SiNodedotjs className='text-blanco text-2xl animate-pulse'/>
                <SiReact className='text-blanco text-2xl animate-pulse'/>
                <SiMongodb className='text-blanco text-2xl animate-pulse'/>
                {/* <p className='font-DynaPuff text-blanco'>Express</p> */}
                <SiMysql className='text-blanco text-2xl animate-pulse'/>  
            </div>    
      </div>
      <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 

      <div className='my-5 md:mx-2' >
        <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Intereses<GiCrosshairArrow className='m-1 animate-pulse hover:animate-ping'/></h2>
        <div className="mx-5">
          <p className='font-DynaPuff text-blanco'>Diseño UX -UI</p>
          <p className='font-DynaPuff text-blanco'>Análisis de datos</p>
          <p className='font-DynaPuff text-blanco'>Animaciones web</p>
        </div>
      </div>

      <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 

      <div className='my-5 md:mx-2'>
        <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Lenguajes <GiDiscussion className='m-1 animate-pulse hover:animate-ping'/></h2>
        <div className="mx-5">
          <p className='font-DynaPuff text-blanco'>Inglés - Básico</p>
          <p className='font-DynaPuff text-blanco'>Español - Nativo</p>
        </div>
      </div>

      <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 

      <div className='my-5 pb-5 md:mx-2'>
        <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Habilidades <GiFruitTree className='m-1 animate-pulse hover:animate-ping'/></h2>
        <div className="mx-5">
          <p className='font-DynaPuff text-blanco'>Liderazgo</p>
          <p className='font-DynaPuff text-blanco'>Comunicación asertiva</p>
          <p className='font-DynaPuff text-blanco'>Solucion de conflictos</p>
          <p className='font-DynaPuff text-blanco'>Trabajo en equipo</p>
          <p className='font-DynaPuff text-blanco'>Orientación a el detalle</p>
        </div>
      </div>
    </div>
  )
}
