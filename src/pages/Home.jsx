import React from 'react'
import { Header } from '../componentes/Header'
import {Initiation} from '../componentes/Initiation'
import { Profile } from '../componentes/Profile'
import { Proyects } from '../componentes/Proyects'
import {Form} from '../componentes/Form'
import {Footer} from '../componentes/Footer'

export const Home = () => {
  return (
  <div>
    <Header/>
    <Initiation />
    <Profile />
    <Proyects />
    {/* <Form /> */}
    <Footer /> 
  </div>
  )
}


