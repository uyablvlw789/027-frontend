import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";

import About from "./pages/About";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Announcements from "./pages/Announcements";
import Announcement from "./pages/Announcement";

import React from "react";

function App() {
  return (
    <div className="relative">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/announcements/:id" element={<Announcement id={1} />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
