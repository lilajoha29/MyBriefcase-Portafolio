import React from 'react'
import {ImClipboard} from "react-icons/im";

export const Experience = () => {
  return (
    <div>
        <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" /> 
        <div className='py-5  '>
                <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl ">Experiencia <ImClipboard className='m-1'/></h2>
            <div className='sm:px-10'>    

                <div className=' py-3 sm:py-5'>
                    <p className="font-DynaPuff text-pastel flex flex-col text-right lg:text-lg">Casa Hormiga</p>
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right lg:text-lg">Empresa de soluciones en diseño</p><br />
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">Creación de página para recepción de clientes con carro de compras y conexión vía WhatsApp entre los posibles clientes y la empresa.</p><br />
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">Proyecto desarrollado en Frontend con interfaz de usuario, web dinámica, ajustable y responsive.</p>
                </div> 
                <div className=' py-3 sm:py-5'>
                    <p className="font-DynaPuff text-pastel flex flex-col text-right lg:text-lg">EducaMas</p>
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right lg:text-lg">Programate School - Fundacion</p><br />
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-left  ">Programa que ayuda a jóvenes de colegios públicos y de estratos bajos que cursen grado 11 para enseñarles fundamentos de programación enfocados en Frontend.</p><br />
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-left ">Proyecto desarrollado FullStack metodología Scrum, web dinámica, ajustable, responsive, escalable y con interfaz de usuario.</p>
                </div> 
        </div>
        </div>
    </div>
  )
}

