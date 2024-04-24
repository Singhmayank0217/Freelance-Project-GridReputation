import React from 'react'
import HomeContent from '../../components/HomeContent/HomeContent'
import Whyus from '../../components/Whyus/Whyus'
import Offer from '../../components/Offer/Offer'
import FactsSection from '../../components/FactsSection/FactsSection'
import CardStack from "../../components/Testimonial/CardStack"
import Layout from '../../components/layout/Layout'

const HomePage = () => {
    const cardsData = [
        {
          id: 1,
          name: "Katty",
          designation: "CEO",
          content: "The place where everything makes sense.",
        },
        {
          id: 2,
          name: "John",
          designation: "CTO",
          content: "My first choice when going for digital marketing, the best services indeed!",
        },
        {
          id: 3,
          name: "Kevin",
          designation: "CTO",
          content: "Hands down the best services!",
        },
      ];
  return (
    <Layout>
      <HomeContent/>
      <Whyus/>
      <Offer/>
      <FactsSection/>
      <CardStack items={cardsData}/>
    </Layout>
  )
}

export default HomePage;
