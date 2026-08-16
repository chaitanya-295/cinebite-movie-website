import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App