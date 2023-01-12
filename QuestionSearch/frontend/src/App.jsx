import { useState } from 'react'
import './App.css'
import { AllRoute } from './components/AllRoute'
import { Nav } from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <AllRoute/>
    </div>
  )
}

export default App
