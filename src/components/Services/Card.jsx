import React, { useState } from 'react';
import './Card.css';
import { motion } from 'framer-motion';
import { Meteors } from '../Meteors/Meteors'; 
import Form from '../Form/form';

const Card = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [truncatedDescription, setTruncatedDescription] = useState('');
    const [isActive, setIsActive] = useState(false); 
    const [isHovered, setIsHovered] = useState(false); 
    const [showForm, setShowForm] = useState(false); 

    
    const truncateDescription = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

  
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    useState(() => {
        setTruncatedDescription(truncateDescription(description, 100));
    }, [description]);

    return (
        <motion.div
            className={`card ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            <div className="meteor-container"> 
                <Meteors number={8} className="meteor" />
            </div>
            <h2>{title}</h2>
            <p>{isExpanded ? description : truncatedDescription}</p>
            {description.length > 100 && (
                <button className="read-more-button" onClick={toggleExpansion}>
                    {isExpanded ? 'Read less' : 'Read more'}
                </button>
            )}
            <button className="service-button" onClick={() => setShowForm(true)}>Get the Service</button>
            {showForm && <Form onClose={() => setShowForm(false)} />}
        </motion.div>
    );
};

export default Card;
