import React from 'react'

export const Perfil = () => {
  return (
    <div id="perfil" className="bg-rosado flex flex-col items-center rounded-lg lg:mt-20">
      <p className="font-DynaPuff text-negro flex flex-col text-center p-4 sm:text-xl lg:text-2xl">I am a web developer with knowledge about backend, scrum methodology, marketing and advertising. I am a hard worker with great teamwork skills. I would like us to work together, so do not hesitate to contact me.</p>
      <div className="flex flex-row items-center sm:my-5 ">
        <img className="flex flex-row lg:h-16 " src="./img/html-5.svg"></img>
        <img className="flex flex-row lg:h-16" src="./img/css3.svg"></img>
        <img className="flex flex-row lg:h-16" src="./img/node-js.svg"></img>
        <img className="flex flex-row lg:h-16" src="./img/react.svg"></img>
      </div>  
      <p className="font-DynaPuff text-negro flex flex-col text-center p-4 sm:text-xl lg:text-2xl">Soy desarrollador web con conocimientos sobre backend, metodología scrum, marketing y publicidad. Soy muy trabajador con gran capacidad de trabajo en equipo. Me gustaría que trabajáramos juntos, así que no dudes en contactarme.</p>
    </div>
  )
}

