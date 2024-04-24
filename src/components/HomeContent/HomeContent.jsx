import React from 'react'
import BackgroundBeams from '../BackgroundBeams/BackgroundBeams'
import logo from "../Assests/GR.svg"
import './HomeContent.css' // Import your CSS file for styling

const HomeContent = () => {
    return (
        <div className="parent">
            <div className="child">
                <BackgroundBeams className="bgAnimation" />
                <div className="grandChild">
                    <div className="contents">
                        <h3 className='h3'>Your first choice when it comes to choosing the best Marketing Agency!</h3>
                        < h1 className='h1'>Grid Reputation.</h1>
                        <h4 className='h4'>A Digital Marketing Agency.</h4>
                        <div className="wrapper">
                            <div className="words">
                                <span className='spans'>Online Reputation Management </span>
                                <span className='spans'>SEO Building </span>
                                <span className='spans'>Content Writing </span>
                                <span className='spans'>Android Development </span>
                                <span className='spans'>Online Reputation Management </span>
                                <span className='spans'>Content Writing </span>
                                <span className='spans'>SEO Building </span>
                            </div>
                        </div>
                    </div>
                    <div className="content-image">
                        <img src={logo} alt="" />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HomeContent
