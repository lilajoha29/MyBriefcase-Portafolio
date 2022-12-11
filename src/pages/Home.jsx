import React from 'react'
import Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Perfil from './componentes/Perfil'
import Proyectos from './componentes/Proyectos'
import Formulario from './componentes/Formulario'
import Footer from './componentes/Footer'

const Home = () => {
  return (
  <div>
    <Header/>
    <Inicio />
    <Perfil />
    <Proyectos />
    <Formulario />
    <Footer /> 
  </div>
  )
}

export default Home
