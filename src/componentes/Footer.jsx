import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className=" bg-rosado  blur h-2 m-auto "></div>
      <div className="flex flex-col text-center m-auto pt-5 ">
        <h1 className="font-DynaPuff text-rosado text-2xl ">Lily Johana Castillo Forero</h1>
        <h2 className="font-DynaPuff text-blanco">I'am full stack developer. ven a ver la transicion de mi carrera</h2>
      </div>
      <div className="flex flex-col text-center py-5 m-auto">
        <h2 className="font-DynaPuff text-rosado text-lg">Menu</h2>
        <a href="#inicio" className="font-DynaPuff text-blanco hover:text-rosado">Inicio</a>
        <a href="#perfil" className="font-DynaPuff text-blanco hover:text-rosado">Perfil</a>
        <a href="#proyectos" className="font-DynaPuff text-blanco hover:text-rosado">Proyectos</a>
        <a href="#formulario" className="font-DynaPuff text-blanco hover:text-rosado">Formulario</a>
      </div>
      <div className="flex flex-col text-center m-auto pb-7">
        <h2 className="font-DynaPuff text-rosado text-lg">Contacto</h2>
        <div className="flex text-center items-center flex-col m-auto">
          <a href="https://www.linkedin.com/in/lily-johana-castillo-forero-a2582667/" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 "
              src="./img/linkedin-circled.svg"></img> Lily Johana Castillo Forero</a>
          <a href="https://github.com/lilajoha29" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 "
              src="./img/github.svg"></img>lilajoha29</a>
          <a href="" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 "
              src="./img/whatsapp.svg"></img>+57 3103186284</a>
          <a href="" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 "
              src="./img/discord.svg"></img>Lily Johana#3761</a>
          <a href="" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 "
              src="./img/gmail-logo.svg"></img>lilajoha2907@gmail.com</a>
        </div>
      </div>
    </footer>
  )
}


