import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import "./AboutUs.css";

const TextGenerateEffect = ({ words, className }) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 1,
                delay: stagger(0.1),
            }
        );
    }, [scope.current]);

    return (
        <div className={`${className}`}>
            <div>
                <div>
                    <motion.div ref={scope}>
                        {wordsArray.map((word, idx) => (
                            <motion.span
                                key={word + idx}
                                className="text-effect"
                            >
                                {word}{" "}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TextGenerateEffect;

