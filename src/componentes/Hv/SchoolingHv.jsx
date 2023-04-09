import React from 'react'

export const SchoolingHv = () => {
    return (
    <div  className="flex flex-col m-auto sm:mb-44 ">
        <div className="blur h-2 my-10 bg-blanco"></div>    
        <div className='py-5 sm:px-10 lg:px-5 '>
                <h2 className="font-DynaPuff text-rosado text-2xl flex flex-col  m-auto pb-3 lg:text-3xl ">Education</h2>
                
            <div className=' py-3 sm:py-5'>
                <p className="font-DynaPuff text-pastel flex flex-col text-left lg:text-lg">Bootcamp Full Stack </p>
                <p className="font-DynaPuff text-blanco text-sm flex flex-col text-left lg:text-lg">Desarrollo Web</p>
                <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right ">Educamas - Simplone</p>
                <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right ">Terminado en el 2023</p>
            </div> 
            <div className=' py-3 sm:py-5'>
                <p className="font-DynaPuff text-pastel flex flex-col text-left lg:text-lg">Programa de formación básico en programación</p>
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-left lg:text-lg">Conocimiento en Python - JavaScript - MySQL</p>
                <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right ">Misión Tic</p>
                <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right ">Terminado en el 2021</p>
            </div>
            <div className=' py-3 sm:py-5'>
                <p className="font-DynaPuff text-pastel  flex flex-col text-left lg:text-lg ">Programa de formación básico en programación con énfasis en aplicaciones.</p>
                    <p className="font-DynaPuff text-blanco text-sm flex flex-col text-left lg:text-lg ">Manejo de Kotlin - Android Studio.</p>
                <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right ">Misión Tic</p>
                <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right ">Terminado en el 2021</p>
            </div>  
            <div className=' py-3 sm:py-5'>
                    <p className="font-DynaPuff  text-pastel  flex flex-col text-left lg:text-lg ">Profesional en Mercadeo y Publicidad</p>
                <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right ">Politécnico Gran Colombiano</p>
                <p className="font-DynaPuff text-blanco text-sm flex flex-col text-right ">Terminado en el 2015</p>
            </div>
        </div> 
        <div className='m-5 pb-10 sm:pt-20'>
            <h2 className="font-DynaPuff text-rosado text-2xl flex flex-col  m-auto pb-3 lg:text-3xl">Skills and tools</h2>
            <div className='grid grid-cols-3 '>
                <p className='font-DynaPuff text-blanco' >HTML</p>
                <p className='font-DynaPuff text-blanco' >CSS</p>
                <p className='font-DynaPuff text-blanco'>JavaScript</p>
                <p className='font-DynaPuff text-blanco col-span-2'>Tailwind-CSS</p>
                <p className='font-DynaPuff text-blanco'>GitHub</p>
                <p className='font-DynaPuff text-blanco'>Trello</p>
                <p className='font-DynaPuff text-blanco'>Figma</p>
                <p className='font-DynaPuff text-blanco'>NodeJS</p>
                <p className='font-DynaPuff text-blanco'>ReactJS</p>
                <p className='font-DynaPuff text-blanco'>MongoDB</p>
                {/* <p className='font-DynaPuff text-blanco'>Express</p> */}
                <p className='font-DynaPuff text-blanco'>MySQL</p> 
                        
            </div>    
        </div>
    </div>
    )
}

