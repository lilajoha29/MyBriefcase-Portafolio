import React from 'react'
import HtmlIcon from '../assets/img/html-5.svg'
import CssIcon from '../assets/img/css3.svg'
import JsIcon from '../assets/img/node-js.svg' 
import ReactIcon from '../assets/img/react.svg'

export const Profile = () => {
  return (
    <div id="Profile" className="bg-rosado flex flex-col items-center rounded-lg mt-32 lg:mt-20">
      <p className="font-DynaPuff text-negro flex flex-col text-center p-4 sm:text-xl lg:text-2xl">I am a web developer with knowledge about backend, scrum methodology, marketing and advertising. I am a hard worker with great teamwork skills. I would like us to work together, so do not hesitate to contact me.</p>
      <div className="flex flex-row items-center sm:my-5 ">
        <img className="flex flex-row lg:h-16 " src={HtmlIcon}></img>
        <img className="flex flex-row lg:h-16" src={CssIcon}></img>
        <img className="flex flex-row lg:h-16" src={JsIcon}></img>
        <img className="flex flex-row lg:h-16" src={ReactIcon}></img>
      </div>  
      <p className="font-DynaPuff text-negro flex flex-col text-center p-4 sm:text-xl lg:text-2xl">Soy desarrollador web con conocimientos sobre backend, metodología scrum, marketing y publicidad. Soy muy trabajador con gran capacidad de trabajo en equipo. Me gustaría que trabajáramos juntos, así que no dudes en contactarme.</p>
    </div>
  )
}

