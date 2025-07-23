import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css"

import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection";
import Categories from "./QuizOverview";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Features from "./Features";
import Stats from "./Stats";


const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <HeroSection />
      <Categories/>
      <Features />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing
