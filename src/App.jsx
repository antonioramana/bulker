import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './layouts/NavBar'
import Hero from './sections/Hero'
import Products from './sections/Products'
import Sustainability from './sections/Sustainability'
import Contact from './sections/Contact'
import Footer from './layouts/Footer'
import AboutUs from './sections/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Products />
    <Sustainability />
    <AboutUs />
    <Contact />
    <Footer />
    </>
  )
}

export default App
