import React from 'react'
import { PresentationsHv } from '../componentes/PresentationsHv'
import { MyHv } from '../componentes/MyHv'
import { SchoolingHv } from '../componentes/SchoolingHv'
import { BArferHv } from '../componentes/BArferHv'



export const Hv = () => {
    return (
    <div>
            <BArferHv/>
            <PresentationsHv />
        <div className='sm:grid sm:grid-cols-2 '>    
            <SchoolingHv/>
            <MyHv />
        </div> 
        <div className='lg:-mt-44 md:-mt-40'>    
            <BArferHv />  
        </div>        
    </div>
    )
}

