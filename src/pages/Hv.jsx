import React from 'react'
import { Header } from '../componentes/Header'
import { PresentacionHv } from '../componentes/PresentacionHv'
import { PersonalHv } from '../componentes/PersonalHv'
import {ConocimientoHv} from '../componentes/ConocimientoHv'



export const Hv = () => {
    return (
    <div>
            <Header/>
            <PresentacionHv />
        <div className='sm:grid sm:grid-cols-2 '>    
            <ConocimientoHv/>
            <PersonalHv />
        </div>        
    </div>
    )
}

