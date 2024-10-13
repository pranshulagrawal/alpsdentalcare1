import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Appointment from "../components/Appointment";
import Blog from "../components/Blog/blogsection";
import BlogDetails from "../components/Blog/blog-detail";
import Nabar from "../components/Navbar";
import Footer from "../components/footer";
const AppRoutes = () => {
  return (
    <Router>
      <Nabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
