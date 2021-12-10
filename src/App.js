import React from "react";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
  <>
  <Navbar/>
  <Hero />
  <Features/>
  <Testimonials/>
  <Footer/>
  <TestimonialCard/>
  </>
  )
}

export default App;
