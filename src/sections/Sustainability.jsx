import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaRecycle, FaWater } from 'react-icons/fa'; // Example icons for sustainability

const Sustainability = () => {
  // Animation for the section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionAnimation = useSpring({
    opacity: sectionInView ? 1 : 0,
    transform: sectionInView ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 220, friction: 120 },
    delay: 200,
  });

  return (
    <section
      ref={sectionRef}
      id="sustainability"
      className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto text-center">
        <animated.h2 style={sectionAnimation} className="text-3xl font-bold text-gray-800 mb-6">
          Notre Engagement envers la Durabilité
        </animated.h2>
        <animated.p style={sectionAnimation} className="text-lg text-gray-600 mb-12">
          Nous fabriquons nos films et bâches plastiques à partir de matières recyclées, et nos chiffons d'essuyage proviennent également de textiles recyclés. Ensemble, faisons la différence.
        </animated.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <animated.div
            style={sectionAnimation}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <FaRecycle className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Recyclage des Matériaux</h3>
            <p className="text-gray-600 text-center">
              Nous nous engageons à réduire notre empreinte écologique en utilisant des matériaux recyclés dans la fabrication de nos produits.
            </p>
          </animated.div>

          <animated.div
            style={sectionAnimation}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <FaLeaf className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Produits Écologiques</h3>
            <p className="text-gray-600 text-center">
              Nos produits sont conçus pour minimiser l'impact sur l'environnement, en utilisant des pratiques durables et responsables.
            </p>
          </animated.div>

        </div>

        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block bg-blue-900 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-800 transition-all duration-300"
          >
            Contactez-nous pour en savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
