import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Services from "../components/Services";
import AboutUs from "../components/Aboutus";
import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
