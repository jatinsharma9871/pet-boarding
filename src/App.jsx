import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Form } from './Components/Form'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/form"} element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
