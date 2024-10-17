import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../components/Home";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Appointment from "../components/Appointment";
import Blog from "../components/Blog/blogsection";
import BlogDetails from "../components/Blog/blog-detail";
import Nabar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import Error from "../components/Error";
import FAQ from "../components/FAQ";

const AppRoutes = () => {
  const [loading, setLoading] = useState(true); // Initially true for the first load
  const location = useLocation();

  useEffect(() => {
    // Only set loading to true on route change after initial load
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Show preloader for 1 second

    return () => clearTimeout(timer); // Cleanup timer // Mark the initial load as done
  }, [location]); // Trigger on location change

  return (
    <>
      <Nabar />
      {loading ? ( // Show preloader if loading is true
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<Error />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      )}
      <Footer />
    </>
  );
};

export default AppRoutes;
