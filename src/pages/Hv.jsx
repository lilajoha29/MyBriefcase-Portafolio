import React from 'react'
import { PresentacionHv } from '../componentes/PresentacionHv'
import { PersonalHv } from '../componentes/PersonalHv'
import { ConocimientoHv } from '../componentes/ConocimientoHv'
import { BArterHv } from '../componentes/BArterHv'



export const Hv = () => {
    return (
    <div>
            <BArterHv/>
            <PresentacionHv />
        <div className='sm:grid sm:grid-cols-2 '>    
            <ConocimientoHv/>
            <PersonalHv />
        </div>        
    </div>
    )
}

