import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import { getAiringTodayTV, getAllMovies } from "./services/tmdbApi";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/movies" element={<Movies title="Now Playing Movies" fetchFunction={getAllMovies} />} />

        <Route path="/series" element={<Movies title="Series" fetchFunction={getAiringTodayTV} />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App