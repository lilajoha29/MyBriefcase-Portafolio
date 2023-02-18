import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import { BeakerIcon } from '@heroicons/react/24/solid'
import { Home } from './pages/Home'
import {Hv} from './pages/Hv'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-default">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='hv' element={<Hv />} />
      </Routes>
    </div>
    
  )
}


