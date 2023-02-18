import React from 'react'
import { SiMongodb, SiHtml5, SiTailwindcss, SiCss3, SiNodedotjs, SiReact } from "react-icons/si";

export const Profile = () => {
  return (
    <div id="Profile" className="bg-rosado flex flex-col items-center rounded-lg mt-32 lg:mt-20">
      <p className="font-DynaPuff text-negro flex flex-col text-center p-4 sm:text-xl lg:text-2xl">I am junior Full stack web developer with knowledge in HTML, CSS, ReactJS, JavaScript, MongoDB and Scrum methodology and I look forward to contributing my knowledge and learning more in the process.</p>
      <div className="flex flex-row items-center sm:my-5 ">
        <SiHtml5 className="flex flex-row lg:h-16 text-5xl" />
        <SiCss3 className="flex flex-row lg:h-16 text-5xl" />
        <SiNodedotjs className="flex flex-row lg:h-16 text-5xl" />
        <SiReact className="flex flex-row lg:h-16 text-5xl" />
        <SiMongodb className="flex flex-row lg:h-16 text-5xl" />


      </div>  
      <p className="font-DynaPuff text-negro flex flex-col text-center p-4 sm:text-xl lg:text-2xl">Soy desarrolladora web Full Stack junior con conocimientos en HTML, CSS, ReactJS, JavaScript, MongoDB y metodología Scrum y tengo ganas de contribuir con mi conocimiento y de aprender más en el proceso.</p>
    </div>
  )
}

