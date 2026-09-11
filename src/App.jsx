import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import { getAiringTodayTV, getAllMovies, getUpcomingMovies } from "./services/tmdbApi";
import ScrollToTop from "./component/ScrollToTop";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies title="Explore Movies" fetchFunction={getAllMovies} />} />

        <Route path="/series" element={<Movies title="Series" fetchFunction={getAiringTodayTV} />} />

        <Route path="/upcoming" element={<Movies title="Upcoming Movies" fetchFunction={getUpcomingMovies} />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App