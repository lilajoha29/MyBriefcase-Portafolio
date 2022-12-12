import React from 'react'

export const Footer = () => {
  return (
    <footer >
      <div className=" bg-rosado  blur h-2 m-auto mb-8 lg:flex"></div>
      <div className='lg:flex lg:flex-row '> 
        <div className="flex flex-col text-center m-auto pt-5 lg:w-96 ">
          <h1 className="font-DynaPuff text-rosado text-2xl lg:text-4xl">Lily Johana Castillo Forero</h1>
          <h2 className="font-DynaPuff text-blanco lg:text-xl">I'am full stack developer. ven a ver la transicion de mi carrera</h2>
        </div>
        <div className="flex flex-col text-center py-5 m-auto">
          <h2 className="font-DynaPuff text-rosado text-lg lg:text-xl">Menu</h2>
          <a href="#inicio" className="font-DynaPuff text-blanco hover:text-rosado lg:text-lg">Inicio</a>
          <a href="#perfil" className="font-DynaPuff text-blanco hover:text-rosado lg:text-lg">Perfil</a>
          <a href="#proyectos" className="font-DynaPuff text-blanco hover:text-rosado lg:text-lg">Proyectos</a>
          <a href="#formulario" className="font-DynaPuff text-blanco hover:text-rosado lg:text-lg">Formulario</a>
        </div>
        <div className="flex flex-col text-center m-auto pb-7">
          <h2 className="font-DynaPuff text-rosado text-lg lg:text-xl">Contacto</h2>
          <div className="flex text-center items-center flex-col m-auto">
            <a href="https://www.linkedin.com/in/lily-johana-castillo-forero-a2582667/" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 lg:w-6"
                src="./img/linkedin-circled.svg"></img> Lily Johana Castillo Forero</a>
            <a href="https://github.com/lilajoha29" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 lg:w-6 "
                src="./img/github.svg"></img>lilajoha29</a>
            <a href="" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 lg:w-6"
                src="./img/whatsapp.svg"></img>+57 3103186284</a>
            <a href="" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 lg:w-6"
                src="./img/discord.svg"></img>Lily Johana#3761</a>
            <a href="" className="lg:text-lg font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 lg:w-6"
                src="./img/gmail-logo.svg"></img>lilajoha2907@gmail.com</a>
          </div>
        </div>
      </div> 
    </footer>
  )
}


