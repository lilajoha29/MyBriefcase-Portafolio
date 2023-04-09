import React from 'react'
import { Link } from 'react-router-dom'
import gif from '../../assets/img/logogif.gif'
import {ImWink2} from "react-icons/im";

export const Initiation = () => {
  return (
    <div id="Home" className="pt-16 flex flex-col items-center my-20 md:grid md:grid-cols-2">
      <div className="relative z-20 w-96 rounded-full px-2 md:justify-self-end ">
        <img src={gif} className=" relative z-20 w-96 rounded-full "/>
        <Link to="/hv" className='  '>
          <button id="boton" className=" absolute right-8 bottom-5 z-30 font-DynaPuff py-1 px-2 bg-rosado text-blanco text-xl rounded-lg flex flex-row hover:text-rosado hover:bg-blanco shadow-blanco/50 shadow-md">Resum <ImWink2 className=" animate-bounce text-ms ml-1 mt-1 text-blanco hover:text-rosado"/>
          </button>
        </Link>  
      </div>
      <div className="">
        <h2 className="font-DynaPuff text-rosado text-2xl">¡¡¡Hola!!!, soy</h2>
        <h1 className="font-DynaPuff text-blanco text-4xl italic  mr-10">Lily Johana</h1>
        <h1 className="font-DynaPuff text-blanco text-4xl italic ml-10">Castillo Forero</h1>
        <br/>
        <div className="flex justify-start">
          <img src='https://media.giphy.com/media/3o7aD7Oa5QKbXid2ww/giphy.gif' className='w-24 mr-60 bottom-0 md:ml-60'></img>
        </div>
      </div>
    </div>
  )
}


