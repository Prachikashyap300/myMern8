import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'

import {SnackbarProvider} from 'notistack'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Eventhandling from './Components/Eventhandling'
import Navbar from './Components/Navbar'
const App = () => {
  return (
    <div>
      <SnackbarProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/EventHandling' element={<Eventhandling/>} />
      </Routes>
      </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App