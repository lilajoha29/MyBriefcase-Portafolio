import React from 'react'
import { PresentationsHv } from '../componentes/Hv/PresentationsHv'
import { MyHv } from '../componentes/Hv/MyHv'
import { SchoolingHv } from '../componentes/Hv/SchoolingHv'
import { BArferHv } from '../componentes/Hv/BArferHv'
import { Footer } from '../componentes/Footer';
import { Experience } from '../componentes/Hv/Experience'
import { Skills } from '../componentes/Hv/Skills'


export const Hv = () => {
    return (
    <div className='m-4 mx-5'>
            <BArferHv/>
            <PresentationsHv />
        <div className='md:grid md:grid-cols-3 '>    
            <div className='md:col-span-2 md:border-r-2 md:border-blanco md:mb-16'>
                <MyHv />
                <SchoolingHv/>
                <Experience />
            </div>
            <div>
                <Skills />
            </div>
        </div> 
            <div className=''>    
            <Footer/>  
            <BArferHv />  
        </div>        
    </div>
    )
}

