import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/Navbar/AppNavbar';
import HdrInformation from './components/hdrinfo/hdrInformation';
import Contact from './components/Navbar/components/contact/contact';
import Blog_two_columns from './components/Navbar/components/blog-two-columns/blog-two-columns';
import Request_a_quote from './components/Navbar/components/request-a-quote/request-a-quote';
import Gallery from './components/Navbar/components/gallery/gallery';
import GalleryFourColumns from './components/Navbar/components/gallery-four-columns/gallery-four-columns';
import { OurPrices, Testimonials } from './components/Navbar/components/pages/pages';
import OceanFreightForwarding from './components/Navbar/components/services/services';
import Slider from './components/slider/slider';
import WelcomeSection from './components/WelcomeSection/welcomeSection';
import Services from './components/Services/services';
import Plane from './components/Plane/plane';
import Advantage from './components/advantage/advantage';
import Review from './components/Review/review';
import FeaturedNews from './components/featuredNews/featuredNews';
import Ftr from './components/Ftr/ftr';

function Home (){
  return(
    <>
    <Slider/>
    < WelcomeSection/>
    <Services/>
    <Plane/>
    <Advantage/>
    <Review/>
    <FeaturedNews/>
    <Ftr/>
    </>
  )
}
function App() {
  return (
    <Router>
      <>
      <HdrInformation/>
        <AppNavbar />
       
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/ocean-freight-forwarding" element={<OceanFreightForwarding/>} /> 
          <Route path="/air-freight-forwarding" element={<OceanFreightForwarding/>} />

          <Route path="/our-prices" element={<OurPrices/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/gallery-four-columns" element={<GalleryFourColumns/>} />

          <Route path="/gallery-Single" element={<Gallery/>} />
          <Route path="/gallery-two-columns" element={<Blog_two_columns/>} />

          <Route path="/request-a-quote" element={<Request_a_quote/>} />

          <Route path="/blog-two-columns" element={<Blog_two_columns/>} />

          <Route path="/contact" element={<Contact/>} />
          <Route path="/request-a-quote" element={<Request_a_quote/>} /> 
        </Routes>
      </>
    </Router>
  );
}

export default App;
