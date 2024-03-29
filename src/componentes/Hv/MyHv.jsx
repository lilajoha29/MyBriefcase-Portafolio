import React from 'react'
import {GiCowled} from "react-icons/gi";

export const MyHv = () => {
    return (
    <div> 
        <hr className=" border-1 border-blanco rounded w-full max-w-full flex justify-center items-center md:col-span-2" />   
            <div className='flex flex-col py-3'>
                <h2 className="font-DynaPuff text-rosado text-2xl flex flex-row m-1 pb-3 lg:text-3xl">Perfil <GiCowled className='m-1 animate-pulse hover:animate-ping' /></h2>
            <div id="perfil" className=" flex flex-col items-center ">
                <p className="font-DynaPuff text-blanco  flex flex-col text-left sm:px-10 lg:text-lg" >Soy Lily Castillo desarrolladora web FrontEnd apasionada por el diseño web con conocimientos en Mercadeo y Publicidad, manejo de target, Insight e investigación de mercado, lo cual permite desarrollar mejor diseño UX y tener facilidades para realizar diseños de interfaz responsive. Tengo habilidades en liderazgo, comunicación asertiva, solución de conflictos y trabajo en equipo. Participe de forma voluntaria con la Red Nacional de Jóvenes de Ambiente a favor incentivar el cuidado ambiental.</p>
            </div>
        </div>
        {/* <div id="perfil" className=" flex flex-col items-center  ">
                <p className="font-DynaPuff text-blanco  flex flex-col text-left sm:px-10 lg:text-lg" >I am junior Full stack web developer with knowledge in HTML, CSS, ReactJS, JavaScript and Scrum methodology. My professional background is about Marketing and advertising, with management of Insight, target and market research, which allows to better develop a UX. I have skills in leadership, assertive communication, conflict resolution and teamwork. I have participated volunteer with la Red Nacional de Jóvenes de Ambiente in favor of encouraging environmental care.</p>
            </div> */}
    </div>    
    )
}

