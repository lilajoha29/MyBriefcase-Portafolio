import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeftShort } from "react-icons/bs";
import logo from '../../assets/img/logoW.png'


export const BArferHv = () => {
    return (
        <div className=''>
            <Link to="/" className=' w-fit font-DynaPuff rounded-2xl flex flex-row text-4xl text-negro bg-rosado hover:text-blanco '>
                    <BsArrowLeftShort className='mt-2'/>
                    <img src={logo} className='w-12 h-12 rounded-xl' ></img>
            </Link>  
        </div>
    )
}

