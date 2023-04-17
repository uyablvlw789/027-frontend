import Footer from "./components/Footer";
import Header from "./components/Header";

import Platform from "./pages/Platform";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Announcements from "./pages/Announcements";
import Announcement from "./pages/Announcement";

function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/announcements/:id" element={<Announcement id={1} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
