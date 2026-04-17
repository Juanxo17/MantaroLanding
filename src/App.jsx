import React from 'react'
import './styles/globals.css'
import { AuroraBackground } from './components/AuroraBackground'
import { CartProvider } from './context/CartContext'
import ScrollProgress from './components/ScrollProgress'
import SectionDivider from './components/SectionDivider'
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
        <ScrollProgress />
        <div className="app">
          <Navbar />
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <HowToOrder />
          <SectionDivider />
          <Menu />
          <SectionDivider />
          <Panzerotti />
          <SectionDivider />
          <Delivery />
          <SectionDivider />
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


