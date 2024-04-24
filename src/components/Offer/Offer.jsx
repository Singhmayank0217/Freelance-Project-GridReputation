// Offer.js
import React, { useEffect, useRef } from 'react';
import { Meteors } from '../Meteors/Meteors'; // Import the Meteors component
import "./Offer.css";

function ServiceCard({ title, description }) {
    return (
      <div className="offer">
        <div className="meteor-container"> {/* Add the meteor-container class */}
          <Meteors number={10} className="meteor" />
        </div>
        {/* Apply animations to the h3 and p elements */}
        <h3 className="animated-from-top">{title}</h3>
        <p className="animated-from-bottom">{description}</p>
      </div>
    );
}

function Offer() {
  const servicesData = [
    {
      title: "Social Media Marketing",
      description: "Engage with customers through content creation and community management!"
    },
    {
      title: "Web Development",
      description: "Get the best websites that boost your business to skies!"
    },
    {
      title: "Reputation Management",
      description: "Reputation management is meant to help you towards success!"
    },
    {
      title: "Search Engine Optimization",
      description: "SEO that makes you known to the world!"
    }
  ];

  const offersRef = useRef(null);

  useEffect(() => {
    const offersElement = offersRef.current;
    const handleScrollAnimation = () => {
      if (window.scrollY >= offersElement.offsetTop - window.innerHeight / 2) {
        offersElement.classList.add('scroll-down-animation');
      }
    };
    window.addEventListener('scroll', handleScrollAnimation);
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="offers" ref={offersRef}>
      <h2>What Do We Offer?</h2>
      <span>Explore our services</span>
      <div className="offers-container">
        {servicesData.map((offer, index) => (
          <ServiceCard
            key={index}
            title={offer.title}
            description={offer.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Offer;
