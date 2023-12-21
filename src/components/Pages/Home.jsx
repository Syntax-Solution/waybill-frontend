import React from "react";
import Nav from "../Nav";
import Hero from "../Hero/Hero";
import About from "../About";
import Tracking from "../Tracking/Tracking";
import Testimonials from "../Testimony";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Tracking />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
