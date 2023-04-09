import React from 'react'
import { PresentationsHv } from '../componentes/Hv/PresentationsHv'
import { MyHv } from '../componentes/Hv/MyHv'
import { SchoolingHv } from '../componentes/Hv/SchoolingHv'
import { BArferHv } from '../componentes/Hv/BArferHv'
import { Footer } from '../componentes/Footer';


export const Hv = () => {
    return (
    <div className='m-4'>
            <BArferHv/>
            <PresentationsHv />
        <div className='sm:grid sm:grid-cols-2 '>    
            <MyHv />
            <SchoolingHv/>
        </div> 
            <div className='lg:-mt-44 md:-mt-40'>    
            <Footer/>  
            <BArferHv />  
        </div>        
    </div>
    )
}

