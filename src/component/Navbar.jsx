import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";
import { searchMovies, searchTV } from "../services/tmdbApi";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const search = async () => {
      if (!searchQuery.trim()) {
        setSearchResult([]);
        return;
      }

      try {
        setSearchLoading(true);

        const [movieResponse, tvResponse] = await Promise.all([
          searchMovies(searchQuery),
          searchTV(searchQuery),
        ]);

        const movies = (movieResponse.data?.results || []).map((movie) => ({
          ...movie,
          media_type: "movie",
        }));

        const tvShows = (tvResponse.data?.results || []).map((show) => ({
          ...show,
          media_type: "tv",
        }));

        setSearchResult([...movies, ...tvShows].slice(0, 8));
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setSearchLoading(false);
      }
    };

    const timer = setTimeout(search, 400);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <nav className="sticky top-0 z-50 bg-[#020617] border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3">

        {/* Navbar Main */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="CineBite Logo"
              className="w-10 h-10 object-contain"
            />

            <span className="text-xl sm:text-2xl font-bold text-white">
              Cine<span className="text-cyan-400">Bite</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">

            <Link
              to="/"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Home
            </Link>

            <Link
              to="/movies"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Movies
            </Link>

            <Link
              to="/series"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Series
            </Link>

            <Link
              to="/upcoming"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Upcoming
            </Link>

            <Link
              to="/about"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              About
            </Link>

          </div>

          {/* Desktop Login / Signup */}
          <div className="hidden lg:flex items-center gap-5">

            <Link
              to="/login"
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition-colors"
            >
              Sign Up
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white text-3xl"
          >
            {mobileMenuOpen ? (
              <IoClose />
            ) : (
              <IoReorderThreeOutline />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-slate-800 pt-4 pb-3">

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                onClick={closeMenu}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Home
              </Link>

              <Link
                to="/movies"
                onClick={closeMenu}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Movies
              </Link>

              <Link
                to="/series"
                onClick={closeMenu}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Series
              </Link>

              <Link
                to="/upcoming"
                onClick={closeMenu}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Upcoming
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                About
              </Link>

              {/* Mobile Auth */}
              <div className="flex items-center gap-4 pt-3 border-t border-slate-800">

                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="px-5 py-2 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition-colors"
                >
                  Sign Up
                </Link>

              </div>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;