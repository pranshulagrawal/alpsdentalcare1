import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../components/Home";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Appointment from "../components/Appointment";
import Blog from "../components/Blog/blogsection";
import BlogDetails from "../components/Blog/blog-detail";
import Nabar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader"; // Your preloader component

const AppRoutes = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.location.hash) {
      window.location.replace(`${window.location.origin}/#/`);
    }
    // Trigger loading state on route change
    setLoading(true);

    // Set timeout to disable preloader after 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [location, navigate]);

  return (
    <>
      <Nabar />
      {loading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <Routes>
          <Route path="/" element={<Home />} default />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      )}
      <Footer />
    </>
  );
};

export default AppRoutes;
