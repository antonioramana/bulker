import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Hero = () => {
  const slides = [
    {
      image: 'https://via.placeholder.com/1200x500?text=Image+1',
      title: 'Découvrez notre premier produit durable.',
      paragraph: 'Nous nous engageons à offrir des produits qui respectent l’environnement tout en garantissant une qualité supérieure.',
    },
    {
      image: 'https://via.placeholder.com/1200x500?text=Image+2',
      title: 'Apprenez-en plus sur notre engagement écologique.',
      paragraph: 'Notre mission est de réduire l’empreinte carbone tout en innovant dans le secteur des produits durables.',
    },
    {
      image: 'https://via.placeholder.com/1200x500?text=Image+3',
      title: 'Explorez notre gamme de produits innovants.',
      paragraph: 'Découvrez notre sélection de produits qui allient technologie avancée et respect de l’environnement.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id='home' className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 text-center">
              <h1 className="text-white text-4xl font-bold mb-2">{slide.title}</h1>
              <p className="text-white text-lg">{slide.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-10 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        <FaArrowLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-10 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        <FaArrowRight size={24} />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
