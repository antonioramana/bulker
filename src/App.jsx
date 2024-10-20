import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './layouts/NavBar';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Sustainability from './sections/Sustainability';
import Contact from './sections/Contact';
import Footer from './layouts/Footer';
import AboutUs from './sections/AboutUs';
import Loader from './components/Loader';
import { API_URL } from './config/api';
import { useLocation } from 'react-router-dom';

function App() {
  const [categories, setCategories] = useState([]); // État pour stocker les catégories
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Appel API pour récupérer les catégories
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/api/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    };

    fetchCategories();

    // Simuler un temps de chargement avant d'afficher les composants
    const timer = setTimeout(() => setLoading(false), 3000); // 3 secondes
    return () => clearTimeout(timer);
  }, []);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location])
  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <Products categories={categories} /> {/* Passer les catégories au composant Products */}
          <Sustainability />
          <AboutUs />
          <Contact />
        </>
      )}
      <Footer />
    </>
  );
}

export default App;
