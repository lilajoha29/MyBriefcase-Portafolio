import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export const BArferHv = () => {
    return (
        <div className=''>
            <Link to="/">
                <button id="boton" className=" font-DynaPuff rounded-lg flex flex-row text-3xl text-rosado hover:text-blanco sm:text-xl sm:mt-2 lg:w-36 lg:justify-center lg:h-8 lg:items-center ">
                    <BsFillArrowLeftCircleFill/>                 
                </button>
            </Link>  
        </div>
    )
}

