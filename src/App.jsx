import React from 'react'
import './styles/globals.css'
import { AuroraBackground } from './components/AuroraBackground'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowToOrder from './components/HowToOrder'
import Menu from './components/Menu'
import Panzerotti from './components/Panzerotti'
import Delivery from './components/Delivery'
import Location from './components/Location'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Cart from './components/Cart'

function App() {
  return (
    <CartProvider>
      <AuroraBackground>
        <div className="app">
          <Navbar />
          <Hero />
          <About />
          <HowToOrder />
          <Menu />
          <Panzerotti />
          <Delivery />
          <Location />
          <Footer />
          <Chatbot />
          <Cart />
        </div>
      </AuroraBackground>
    </CartProvider>
  )
}

export default App
