import React, { useState, useEffect } from 'react';
import TextGenerateEffect from "../AboutUs/AboutUs";
import abt1 from '../Assests/abt1.svg';
import abt2 from '../Assests/abt2.svg';
import { motion } from "framer-motion";
import './AboutUs.css';
import BackgroundBeams from "../BackgroundBeams/BackgroundBeams";

const FullAbout = () => {
    const [showParagraph, setShowParagraph] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowParagraph(true);
        }, 12000); // Adjust the delay time according to your animation duration
        return () => clearTimeout(timer);
    }, []);

    const words = `Since 2021, when we began as a team of three in Kolkata,
    Grid Reputation has existed solely online. We are a full-service digital and commerce agency today,
    and we have a solid track record of developing integrated, transformative strategies across the whole digital landscape. 
    The same people who founded us are still in charge of us, and we take pride in our independence.
    It implies that we can act more swiftly, audaciously, and successfully. A collection of diverse
    and knowledgeable minds that are aware that in order to gain consumers' trust, brands must delight and reward them.`;

    return (
        <div className='full-container'>
            <BackgroundBeams className="bgAnimation" />
            <h2>About Us</h2>
            <div className="upper-container">
                <div className="moving-text-left">
                    <TextGenerateEffect words={words} />
                </div>
                <motion.div
                    className="right-img"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={abt1} alt="" />
                </motion.div>
            </div>
            <div className="lower-container">
                <motion.div
                    className="left-img"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={abt2} alt="" />
                </motion.div>
                <motion.div
                    className="stable-text-right"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showParagraph ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p>
                        Since we take a data-driven and entirely audience-focused approach, we can provide our clients with the most significant and measurable solutions to their challenges. Of course, none of this would be possible without our fantastic staff. Some of the most talented, enthusiastic, and curious individuals in the business make up our teams. People who actually care about making a difference and with whom our clients value doing business. We're a company of committed and curious people. We collaborate with individuals that share our instinctual conviction and audacity in vision. People who are aware that in order to stand out, you must be unique.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default FullAbout;
