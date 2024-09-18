import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaLeaf, FaRecycle, FaWater } from 'react-icons/fa'; // Exemple d'icônes pour la durabilité

const Sustainability = () => {
  // Animation pour les cartes
  const cardAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 120 },
    delay: 200,
  });

  // Animation pour le bouton
  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 220, friction: 120 },
    delay: 400,
  });

  return (
    <section id="sustainability" className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <animated.h2 style={cardAnimation} className="text-3xl font-bold text-gray-800 mb-6">
          Notre Engagement pour la Durabilité
        </animated.h2>
        <animated.p style={cardAnimation} className="text-lg text-gray-600 mb-12">
          Nous nous engageons à promouvoir des pratiques durables à travers nos produits et services. Découvrez comment nous contribuons à un avenir plus vert et plus responsable.
        </animated.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <animated.div style={cardAnimation} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaLeaf className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Énergie Renouvelable</h3>
            <p className="text-gray-600">
              Nous utilisons des sources d'énergie renouvelables pour réduire notre empreinte carbone et promouvoir un avenir durable.
            </p>
          </animated.div>

          <animated.div style={cardAnimation} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaRecycle className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Recyclage</h3>
            <p className="text-gray-600">
              Nous mettons en place des programmes de recyclage pour minimiser les déchets et encourager la réutilisation des matériaux.
            </p>
          </animated.div>

          <animated.div style={cardAnimation} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaWater className="text-teal-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Conservation de l'Eau</h3>
            <p className="text-gray-600">
              Nous adoptons des pratiques pour conserver l'eau et protéger les ressources en eau pour les générations futures.
            </p>
          </animated.div>
        </div>

        <animated.div style={buttonAnimation} className="mt-12">
          <a
            href="#contact"
            className="inline-block bg-blue-900 text-white py-3 px-6 rounded-md text-lg hover:bg-blue-800 transition-all duration-300"
          >
            Contactez-nous pour en savoir plus
          </a>
        </animated.div>
      </div>
    </section>
  );
};

export default Sustainability;
