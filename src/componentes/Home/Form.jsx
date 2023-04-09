import React from 'react'
import {ImSmile2} from "react-icons/im";


export const Form = () => {
    return (
        <div id="form" className=' '>
        <h1 className='font-DynaPuff items-center text-pastel text-4xl flex flex-col text-center mb-4 sm:text-4xl '>Contactame</h1>
        <h2 className='font-DynaPuff text-center items-center text-blanco text-xl mb-4  '>Quieres saber mas enviame un mensaje.</h2>
        <form className='bg-blanco rounded-md m-5 p-5 shadow-rosado shadow-lg mb-20 flex flex-col gap-2 md:mx-16'>
            <div>
            <label className='font-DynaPuff'>Nombre</label>
            <input id="Nombre" type='text' placeholder='Nombre' className='border-pastel border-solid border-2 rounded-md p-2 w-full outline-none'></input>
            </div>
            <div>
            <label className='font-DynaPuff'>Email</label>
            <input id="Nombre" type='text' placeholder='Email' className='border-pastel border-solid border-2 rounded-md p-2 w-full outline-none'></input>
            </div>
            <div>
            <label className='font-DynaPuff'>Mensaje</label>
            <input id="Mensaje" type='text' placeholder='Mensaje' className='border-pastel border-solid border-2 rounded-md p-2 w-full h-24 outline-none'></input>
            </div>
            <button className='font-DynaPuff bg-rosado text-blanco  rounded-lg hover:text-rosado hover:bg-blanco shadow-negro/50 shadow-md w-fit p-2 flex flex-row'>Enviar <ImSmile2 className="animate-bounce text-ms ml-1 mt-1 text-blanco hover:text-rosado"/></button>
        </form>
        
        </div>
    )
}


