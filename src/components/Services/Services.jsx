import React from 'react';
import Card from './Card';
import "./Servicss.css";

const Services = () => {
    const services = [
        { title: "Online Reputation Management", description: "In the modern world, customers research your company online before deciding whether or not to use your services. We work to establish a favourable online reputation for your brand as we are one of the most reputable Online Reputation Management (ORM) company across the world." },
        { title: "Web Development", description: "A website must be carefully thought out in order to be effective. We begin by designing your user experiences and user journeys for your website based on a thorough understanding of your target audience. Then, in order to improve the experience, we analyse the websites of your rivals." },
        { title: "Android App Development", description: "Clients from all across the world choose Grid Reputation as their first choice. We are deeply committed to creating extremely captivating apps that carefully adhere to the business needs and serving a wide range of projects with the utmost client satisfaction in mind." },
        { title: "Search Engine Optimisation ", description: "Any successful SEO strategy is built on thorough keyword research. We can find short-tail and long-tail keywords that will send the highest-quality, money-making traffic by learning what your clients are searching for. We also keep an eye on your rivals, analysing their strategy and methods to inform your own. To ensure transparent supervision and coordination across your SEO and PPC efforts, everything is recorded in a single document.", buttonText: "Get SEO Service" },
        { title: "Digital Marketing Strategy", description: "An organization's strategic marketing goals, such as brand building or new company development, can be met by adopting digital marketing tools and tactics. A comprehensive, strategic marketing plan that uses digital strategies frequently includes a digital marketing strategy.", buttonText: "Get Digital Marketing Strategy Service" },
        { title: "Social Media Marketing", description: "To engage your brand's target market and interact with customers, we offer A-Z social media marketing services. We pledge to establish your brand as the most trustworthy one among consumers and to generate more high-quality leads. We implement a successful, data-driven approach for your brand every day, scale outcomes often.", buttonText: "Get SMM Service" },
        { title: "Social Media Management", description: "Our team creates a vibrant community for your brand on all social media platforms. We provide a dedicated community manager to respond quickly to your consumers' questions and increase the credibility of your brand. We are able to pinpoint your precise requirements, create a strategy, and carry out the required tasks for long-term social media success.", buttonText: "Get Social Media Management Service" },
        { title: "Google Reviews", description: "One of the best aspects of our reviews is that you may decide how many to buy, giving you a lot of flexibility. Consider the importance of your reputation before deciding to buy Google reviews. The most important thing to remember is that content is king, which means that internet reviews of your brand are extremely important.", buttonText: "Get Google Reviews Service" },
        { title: "Video Marketing", description: "You're making a wise decision if you want to use video in your marketing strategy, and your clients will appreciate it. Grid Reputation has a history of producing interesting movies for various video marketing efforts, including social media videos, website videos, and video advertising. We are the ideal video marketing business if you want your videos to be powerful and hold viewers' attention.", buttonText: "Get Video Marketing Service" },
        { title: "PPC Ads", description: "Many businesses are searching for quick, efficient ways to position their brands in front of clients who are likely to convert well because the landscape of digital marketing is changing. Boost your online presence and see results right now with Grid Reputation's PPC Advertising services.", buttonText: "Get PPC Ads Service" },
    ];

    return (
        <div className='service'>
            {services.map((service, index) => (
                <Card key={index} title={service.title} description={service.description} />
            ))}
        </div>
    );
};

export default Services;


