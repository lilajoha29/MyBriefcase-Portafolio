import React from 'react'
import { PresentacionHv } from '../componentes/PresentacionHv'
import { PersonalHv } from '../componentes/PersonalHv'
import {ConocimientoHv} from '../componentes/ConocimientoHv'



export const Hv = () => {
    return (
    <div>
            <PresentacionHv />
            <ConocimientoHv/>
            <PersonalHv/>
    </div>
    )
}

