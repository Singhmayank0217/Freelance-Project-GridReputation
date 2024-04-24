import React, { useState, useEffect } from 'react';
import img1 from '../Assests/whyus1.svg';
import img2 from '../Assests/whyus2.svg';
import "./Whyus.css";

const Whyus = () => {
    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`container ${scrollDirection === 'down' ? 'fade-in' : 'fade-out'}`}>
            <div className="why">
                <h1>Why us?</h1>
                <p>Because we offer:</p>
            </div>
            <div className="rating">
                <div className="text-rating">
                    <div className={`rating1 ${scrollDirection === 'down' ? 'slide-in-left' : 'slide-in-right'}`}>
                        <h3>The Best SEO Practices</h3>
                        <p>You will get a customized mix of on-page and off-page SEO that will take your company to new heights!</p>
                        <h3>Remarkable Digital Marketing</h3>
                        <p>Get social media, guest blogging, email marketing, and other tactics to work for you rather than against you.</p>
                    </div>
                    <div className='image1'>
                        <img src={img1} alt="" className={`slide-in-${scrollDirection}`} />
                    </div>
                </div>
                <div className="text-rating">
                    <div className="image2">
                        <img src={img2} alt="" className={`slide-in-${scrollDirection}`} />
                    </div>
                    <div className={`rating1 ${scrollDirection === 'down' ? 'slide-in-right' : 'slide-in-left'}`}>
                        <h3>Real-Time Stats and ORM</h3>
                        <p>You will be able to keep tabs on how customers view your business every single day with the help of our online reputation management solution.</p>
                        <h3>Amazing Websites</h3>
                        <p>Our staff is always ready to come to your rescue when you become weary of the dated styles, layouts, and features.</p>
                    </div>
                </div>
            </div>
            <div className="talk">
                <h3>Interested? We are happy to get talking :)</h3>
                <div className="button-container slide-in-up">
                    <button>
                        Let's talk.
                        <a href=""></a>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Whyus;
