import React from 'react'
import { Link } from 'react-router-dom'

export const BArferHv = () => {
    return (
        <div className=''>
            <Link to="/">
                <button id="boton" className=" font-DynaPuff bg-rosado text-blanco rounded-lg flex flex-row pr-3 pl-3 hover:text-rosado hover:bg-blanco sm:text-xl sm:mt-2 lg:w-36 lg:justify-center lg:h-8 lg:items-center ">
                    <span className="flex items-center space-x-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-blanco hover:text-rosado m-auto">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>
                </span>
                </button>
            </Link>  
        </div>
    )
}

