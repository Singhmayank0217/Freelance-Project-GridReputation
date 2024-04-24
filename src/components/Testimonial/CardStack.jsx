import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./CardStack.css";

const CardStack = ({ items, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  let interval;

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 2000);
  };

  return (
    <div className="relative card-stack-container">
      <div className="testimonials-title">
        <h2>Testimonials</h2>
        <p>See what others say about us</p>
      </div>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="cards"
          style={{
            top: `${index * -CARD_OFFSET}px`,
            transformOrigin: "top center",
            transform: `scale(${1 - index * SCALE_FACTOR})`,
            zIndex: cards.length - index,
          }}
        >
          <div className="con font-normal text-neutral-700 dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className=" card-name text-neutral-500 font-medium dark:text-white">
              {card.name}
            </p>
            <p className="card-des text-neutral-400 font-normal dark:text-neutral-200">
              {card.designation}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardStack;
