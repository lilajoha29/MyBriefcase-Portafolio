import React from 'react'

export const Formulario = () => {
  return (
    <div id="formulario" className="py-52">
      <h2 className="font-DynaPuff text-rosado text-2xl flex flex-col text-center ">¿Quieres trabajar conmigo?</h2>
      <div className="bg-gray-500 p-3 rounded-xl m-auto w-10/12">
        <p className="font-DynaPuff text-black flex flex-col text-center pb-3">Te invito a enviarme un mensaje y nos ponemos en contacto</p>
        <div className="pb-3 flex flex-col ">
          <form>
            {/* <input placeholder="Name:" type="text" id="Name" className="text-gray-500 rounded-xl bg-blanco mb-3 h-10"></input>
            <input placeholder="Email:" type="email" id="Email" className="text-gray-500 rounded-xl bg-blanco mb-3 h-10"></input>
            <input placeholder="Phone:" type="number" id="NumberPhone" className="text-gray-500 rounded-xl bg-blanco mb-3 h-10"></input>
            <input placeholder="Message:" type="text" id="Message" className="text-gray-500 rounded-xl bg-blanco pb-7 h-24"></input> */}
          </form>
        </div> 
        <button id="boton" className="font-DynaPuff bg-rosado text-blanco rounded-lg flex flex-row pr-3 pl-3 hover:text-rosado hover:bg-blanco">Send</button>
      </div>
    </div>
    
  )
}

