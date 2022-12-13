import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Home } from './pages/Home'
import {Hv} from './pages/Hv'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='hv' element={<Hv />} />
      </Routes>
      {/* <Home/> */}
    </>
    
  )
}


