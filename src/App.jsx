// import {routes, reoute, Route} from 'react-router'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BeakerIcon } from '@heroicons/react/24/solid'
import Header from './componentes/Header'
import Inicio from './componentes/Inicio'
import Perfil from './componentes/Perfil'
import Proyectos from './componentes/Proyectos'
import Formulario from './componentes/Formulario'
import Footer from './componentes/Footer'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Home/>
    </div>
  )
}

export default App
