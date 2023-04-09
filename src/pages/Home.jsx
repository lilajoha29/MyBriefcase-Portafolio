import React from 'react'
import { Header } from '../componentes/Home/Header'
import {Initiation} from '../componentes/Home/Initiation'
import { Profile } from '../componentes/Home/Profile'
import { Proyects } from '../componentes/Home/Proyects'
import { Form } from '../componentes/Home/Form'
import {Footer} from '../componentes/Footer'

export const Home = () => {
  return (
  <div className='m-4 '>
    <Header/>
    <Initiation />
    <Profile />
    <Proyects />
    <Form />
    <Footer /> 
  </div>
  )
}


