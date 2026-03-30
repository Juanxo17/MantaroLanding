import React from 'react'
import './styles/globals.css'
import { AuroraBackground } from './components/AuroraBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Panzerotti from './components/Panzerotti'
import Delivery from './components/Delivery'
import Location from './components/Location'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

function App() {

  return (
    <AuroraBackground>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Panzerotti />
        <Delivery />
        <Location />
        <Footer />
        <Chatbot />
      </div>
    </AuroraBackground>
  )
}

export default App
