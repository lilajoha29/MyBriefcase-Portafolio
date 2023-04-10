import React from 'react'
import { SiMongodb, SiHtml5, SiTailwindcss, SiCss3, SiNodedotjs, SiReact } from "react-icons/si";

export const Profile = () => {
  return (
    <div id="Profile" className="bg-rosado/60 grid grid-cols-3 items-center shadow-lg shadow-blanco rounded-lg px-3 -mt-5 md:mx-16">
      <div className='col-span-2'>
        <p className="font-DynaPuff text-zinc-900 flex flex-col text-center p-4 sm:text-xl lg:text-2xl ">Soy desarrolladora web Full Stack junior con conocimientos en HTML, CSS, ReactJS, JavaScript, MongoDB y metodología Scrum y tengo ganas de contribuir con mi conocimiento y de aprender más en el proceso.</p>
      </div>
      <div className="flex flex-col gap-3 p-6 items-center sm:my-5 ">
        <SiHtml5 className=" animate-pulse flex flex-row lg:h-16 text-5xl hover:text-blanco" />
        <SiCss3 className=" animate-pulse flex flex-row lg:h-16 text-5xl hover:text-blanco" />
        <SiNodedotjs className="animate-pulse flex flex-row lg:h-16 text-5xl hover:text-blanco" />
        <SiReact className="animate-pulse flex flex-row lg:h-16 text-5xl hover:text-blanco" />
        <SiMongodb className="animate-pulse flex flex-row lg:h-16 text-5xl hover:text-blanco " />
      </div>  
      {/* <p className="font-DynaPuff text-negro flex flex-col text-center p-4 sm:text-xl lg:text-2xl">I am junior Full stack web developer with knowledge in HTML, CSS, ReactJS, JavaScript, MongoDB and Scrum methodology and I look forward to contributing my knowledge and learning more in the process.</p> */}
    </div>
  )
}

