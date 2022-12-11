import React from 'react'

const Formulario = () => {
  return (
    <div id="formulario" class="py-52">
      <h2 class="font-DynaPuff text-rosado text-2xl flex flex-col text-center ">¿Quieres trabajar conmigo?</h2>
      <div class="bg-gray-500 p-3 rounded-xl m-auto w-10/12">
        <p class="font-DynaPuff text-black flex flex-col text-center pb-3">Te invito a enviarme un mensaje y nos ponemos en contacto</p>
        <div class="pb-3 flex flex-col ">
          <input type="text" id="Name" class="text-gray-500 rounded-xl bg-blanco mb-3 h-10">Name:</input>
          <input type="email" id="Email" class="text-gray-500 rounded-xl bg-blanco mb-3 h-10">Email:</input>
          <input type="number" id="NumberPhone" class="text-gray-500 rounded-xl bg-blanco mb-3 h-10">Phone:</input>
          <input type="text" id="Message" class="text-gray-500 rounded-xl bg-blanco pb-7 h-24">Message:</input>
        </div> 
        <button id="boton" class="font-DynaPuff bg-rosado text-blanco rounded-lg flex flex-row pr-3 pl-3 hover:text-rosado hover:bg-blanco">Send</button>
      </div>
    </div>
  )
}

export default Formulario