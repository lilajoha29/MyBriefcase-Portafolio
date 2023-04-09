import React from 'react'
import Logo from '../../assets/img/logoW.png'

export const PresentationsHv = () => {
    return (
    <div className="relative flex flex-col items-center pb-16 my-5 lg:flex-row lg:mr-10">
            <h2 className="font-DynaPuff text-rosado text-5x1 flex flex-col  m-auto pb-3 "></h2>
        {/* <div className="absolute inset-1 bg-rosado  rounded-full blur h-80 w-90 my-5 m-auto sm:h-96 sm:w-96 sm:m-auto sm:mb-60 md:mt-8 lg:pt-7 lg:ml-52 "></div> */}
            <img src={Logo} className="w-96  rounded-full lg:ml-80 relative"></img>
        <div className="pr-4">
            <h2 className="font-DynaPuff text-blanco text-2xl">I'am</h2>
            <h1 className="font-DynaPuff text-rosado text-4xl ">Lily Johana Castillo Forero</h1>
        </div>
        
    </div>

    )
}

