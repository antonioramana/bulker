import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCategories from './pages/ProductCategories';
import CategoryProducts from './pages/CategoryProducts';
import ProductDetails from './pages/ProductDetails';
import './App.css'
import Navbar from './layouts/NavBar'
import Hero from './sections/Hero'
import Products from './sections/Products'
import Sustainability from './sections/Sustainability'
import Contact from './sections/Contact'
import Footer from './layouts/Footer'
import AboutUs from './sections/AboutUs'
import { useEffect } from 'react';
import Loader from './components/Loader';

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulez un temps de chargement avant de terminer le chargement
    const timer = setTimeout(() => setLoading(false), 3000); // 3 secondes
    return () => clearTimeout(timer);
  }, []);
  return (
    
    <>
       <Navbar />
       {loading ? (
        <Loader />
      ) : (
        <>
      <Hero />
    <Products />
    <Sustainability />
    <AboutUs />
    <Contact />
    </>
    )}
    <Footer />
 
    {/* <Routes>
        <Route path="/" element={<ProductCategories />} />
        <Route path="/category/:categoryId" element={<CategoryProducts />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes> */}
    </>
  )
}

export default App
