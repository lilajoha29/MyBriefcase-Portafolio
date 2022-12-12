import React from 'react'

export const PersonalHv = () => {
    return (
    <div>
        <div className="blur h-2 my-10  bg-blanco"></div>    
            <div className='flex flex-col'>
                <h2 className="font-DynaPuff text-rosado text-2xl flex flex-col  m-auto pb-3 sm:pt-4 lg:text-3xl">Profile</h2>
            <div id="perfil" className=" flex flex-col items-center  ">
                <p className="font-DynaPuff text-blanco  flex flex-col text-left sm:px-10 lg:text-lg" >I am a web developer with knowledge in full stack, Scrum methodology, Marketing and Advertising. I am a hard worker with experience in customer service and good teamwork skills, always helpful and polite, but most importantly, I am willing to constantly learn new skills. I'm so excited for us to work together, so don't hesitate to contact me. Hard worker and I have good teamwork skills. I would love to work together, so don't hesitate to contact me.</p>
            </div>
            <div id="perfil" className=" flex flex-col items-center py-10">
                <p className="font-DynaPuff text-blanco  flex flex-col text-left sm:px-10 lg:text-lg" >Soy una desarrolladora web con conocimientos en full stack,  metodología Scrum y en Mercadeo y Publicidad. Soy una gran trabajadora con experiencia en servicio al cliente y tengo buenas habilidades de trabajo en equipo , siempre amable y educada, pero lo que es más importante, estoy dispuesta a aprender constantemente nuevas habilidades. Estoy tan entusiasmada por trabajar juntos, entonces no dude en ponerse en contacto conmigo.</p>
            </div>
        </div>
        <div className="flex flex-col text-center m-auto pb-7 lg:mt-16 ">
            <h2 className="font-DynaPuff text-rosado text-2xl py-5 lg:text-3xl">Contact me</h2>
            <div className="flex text-center items-center flex-col m-auto">
            <a href="https://www.linkedin.com/in/lily-johana-castillo-forero-a2582667/" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 "
                src="./img/linkedin-circled.svg"></img> Lily Johana Castillo Forero</a>
            <a href="https://github.com/lilajoha29" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 "
                src="./img/github.svg"></img>lilajoha29</a>
            <a href="" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 "
                src="./img/whatsapp.svg"></img>+57 3103186284</a>
            <a href="" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 "
                src="./img/discord.svg"></img>Lily Johana#3761</a>
            <a href="" className="font-DynaPuff text-blanco flex text-center hover:text-rosado"><img className="w-5 "
                src="./img/gmail-logo.svg"></img>lilajoha2907@gmail.com</a>
            </div>    
        </div>    
    </div>    
    )
}

