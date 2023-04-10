import React from 'react'
import {GiDiploma} from "react-icons/gi";

export const SchoolingHv = () => {
    return (
    <div  className="flex flex-col ">
        <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" />  
        <div className='py-3  '>
                <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Education <GiDiploma className='m-1 animate-pulse hover:animate-ping'/></h2>
            <div className='sm:px-10'>    
            <div className=' py-3 sm:py-5 '>
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
        </div>
    </div>
    )
}

