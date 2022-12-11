import React from 'react'

const Footer = () => {
  return (
    <footer>  
      <div class="flex flex-col text-center m-auto ">
        <h1 class="font-DynaPuff text-rosado text-2xl ">Lily Johana Castillo Forero</h1>
        <h2 class="font-DynaPuff text-blanco">I'am full stack developer. ven a ver la transicion de mi carrera</h2>
      </div>
      <div class="flex flex-col text-center py-5 m-auto">
        <h2 class="font-DynaPuff text-rosado text-lg">Menu</h2>
        <g href="#inicio" class="font-DynaPuff text-blanco hover:text-rosado">Inicio</g>
        <g href="#perfil" class="font-DynaPuff text-blanco hover:text-rosado">Perfil</g>
        <g href="#proyectos" class="font-DynaPuff text-blanco hover:text-rosado">Proyectos</g>
        <g href="#formulario" class="font-DynaPuff text-blanco hover:text-rosado">Formulario</g>
      </div>
      <div class="flex flex-col text-center m-auto">
        <h2 class="font-DynaPuff text-rosado text-lg">Contacto</h2>
        <div class="flex text-center items-center flex-col m-auto">
          <g href="" class="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img class="w-5 " src="./img/linkedin-circled.svg"> Lily Johana Castillo Forero</img></g>
          <g href="" class="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img class="w-5 " src="./img/github.svg">lilajoha29</img></g>
          <g href="" class="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img class="w-5 " src="./img/whatsapp.svg">+57 3103186284</img></g>
          <g href="" class="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img class="w-5 " src="./img/discord.svg">Lily Johana#3761</img></g>
          <g href="" class="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img class="w-5 " src="./img/gmail-logo.svg">lilajoha2907@gmail.com</img></g>
        </div>
      </div>
    </footer>  
  )
}

export default Footer
