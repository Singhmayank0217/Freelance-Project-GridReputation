import React from "react";
import "./Meteors.css"; // Import CSS file for styling

export const Meteors = ({
    number,
    className,
}) => {
    const meteors = new Array(number || 15).fill(true);
    return (
        <>
            {meteors.map((el, idx) => (
                <span
                    key={"meteor" + idx}
                    className={"meteor " + (className ? className : "")}
                    style={{
                        top: Math.floor(Math.random() * (100 - 0) + 0) + "%",
                        left: Math.floor(Math.random() * (100 - 0) + 0) + "%",
                        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
                        animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
                    }}
                ></span>
            ))}
        </>
    );
};

export function MeteorsDemo() {
    return (
        <div>
            <Meteors number={20} />
        </div>
    );
}
