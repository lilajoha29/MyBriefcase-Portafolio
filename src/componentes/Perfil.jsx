import React from 'react'

export const Perfil = () => {
  return (
    <div id="perfil" className="bg-rosado flex flex-col items-center  ">
      <p className="font-DynaPuff text-negro flex flex-col text-center p-4 ">Soy una desarrolladora web con conocimientos en full stack developer, metodología Scrum y en Mercadeo y Publicidad, Soy
      una gran trabajadora y tengo buenas habilidades de trabajo en equipo. me encantaría trabajar juntos, entonces no dude en
      ponerse en contacto conmigo.</p>
      <div className="flex flex-row items-center ">
        <img className="flex flex-row " src="./img/html-5.svg"></img>
        <img className="flex flex-row" src="./img/css3.svg"></img>
        <img className="flex flex-row" src="./img/node-js.svg"></img>
        <img className="flex flex-row" src="./img/react.svg"></img>
      </div>  
      <p className="font-DynaPuff text-negro flex flex-col text-center p-4">I am a web developer with knowledge in full stack developer, Scrum methodology and in Marketing and Advertising, I am a
      hard worker and I have good teamwork skills. I would love to work together, so don't hesitate to contact me.</p>
    </div>
  )
}

