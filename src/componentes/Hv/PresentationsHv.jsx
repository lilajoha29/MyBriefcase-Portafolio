import React from 'react'
import Logo from '../../assets/img/logoW.png'
import {ImDownload} from "react-icons/im"

export const PresentationsHv = () => {
        return (
        <div className='flex flex-col self-center'>
                <img src="https://media.giphy.com/media/paTz7UZbPfTZFRYnnB/giphy.gif" className='w-44 self-center'></img>
                <div className="flex flex-col text-center m-5 md:my-10">
                        <h1 className="font-DynaPuff text-rosado text-4xl md:text-5xl">Lily Johana Castillo Forero</h1>
                        <h2 className="font-DynaPuff text-blanco text-2xl">Desarrolladora web full stack mercadologa y publicidad</h2>
                </div>
                <a href='../../assets/hv-LilyCastillo.pdf' target='_blank' rel='noopener noreferrer' className="font-DynaPuff rounded-xl flex flex-col items-center text-negro bg-rosado hover:text-blanco w-fit p-3 self-center my-6">
                        <p className="font-DynaPuff">Descarga el Resume o CV</p> 
                        <ImDownload className='mt-2 animate-bounce'/>
                </a>
        </div>
        )
}

