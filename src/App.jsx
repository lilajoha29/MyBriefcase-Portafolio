// import {Router, Route} from 'react-router'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import {BrowserRouter, Route} from 'react-router-dom'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Home } from './pages/Home'
import {Hv} from './pages/Hv'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
    
  )
}


