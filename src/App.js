import React from "react";
// import CardStack from "./components/Testimonial/CardStack";
// import HomeContent from "./components/HomeContent/HomeContent"
// import Whyus from "./components/Whyus/Whyus"
// import Services from "./components/Services/Services"
// import Navbar from "./components/Navbar/Navbar";
// import FactsSection from "./components/FactsSection/FactsSection";
// import Offer from "./components/Offer/Offer";
// import FullAbout from "./components/AboutUs/FullAbout";
// import Footer from "./components/Footer/Footer";
// import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ServicesPage from "./pages/services/ServicesPage";
import AboutUsPage from "./pages/aboutus/AboutUsPage";
import ContactUsPage from "./pages/contactus/ContactUsPage";
import DetailsPages from "./pages/details/DetailsPages"
import AllBlogContentPage from "./pages/allblogcontent/AllBlogContentPage"
import ScrollTop from "./components/scollerTop/ScrollTop";
// import "./mainblog.css";



function App() {

  return (
    <div>
      {/* <Navbar />
      <HomeContent />
      <Whyus />
      <Services />
      <FactsSection />
      <Offer />
      <CardStack items={cardsData} />
      <FullAbout />
      <Contact/>
      <Footer/> */}
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/aboutus" element={<AboutUsPage/>}/>
          <Route path="/contactus" element={<ContactUsPage/>}/>
          <Route path='/allblogcontentpage' element={<AllBlogContentPage/>} />
          <Route path='/details/:id' element={<DetailsPages/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
