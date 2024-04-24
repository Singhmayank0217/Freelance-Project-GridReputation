import React from 'react';
import './FactsSection.css';

const FactsSection = () => {
    return (
        <div className="fact-container">
            <div className="facts">
                <div className="row">
                    <div className="col fadeIn" style={{ animationDelay: '0.1s' }}>
                        <div className="fact-item">
                            <h1 className="fact-number">#1</h1>
                            <span className="fact-description">Top Best ORM Company</span>
                        </div>
                    </div>
                    <div className="col fadeIn" style={{ animationDelay: '0.4s' }}>
                        <div className="fact-item">
                            <h1 className="fact-number">99%</h1>
                            <span className="fact-description">Customer Satisfaction</span>
                        </div>
                    </div>
                    <div className="col fadeIn" style={{ animationDelay: '0.7s' }}>
                        <div className="fact-item">
                            <h1 className="fact-number">100+</h1>
                            <span className="fact-description">Projects Completed</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col fadeIn" style={{ animationDelay: '1s' }}>
                        <div className="fact-item">
                            <h1 className="fact-number">20+</h1>
                            <span className="fact-description">Industries we worked for</span>
                        </div>
                    </div>
                    <div className="col fadeIn" style={{ animationDelay: '1.3s' }}>
                        <div className="fact-item">
                            <h1 className="fact-number">5+</h1>
                            <span className="fact-description">Years of experience</span>
                        </div>
                    </div>
                    <div className="col fadeIn" style={{ animationDelay: '1.7s' }}>
                        <div className="fact-item">
                            <h1 className="fact-number">50+</h1>
                            <span className="fact-description">Highly qualified ORM expert Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FactsSection;
