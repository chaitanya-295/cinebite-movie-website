import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";
import { searchMovies, searchTV } from "../services/tmdbApi";
import { FaSearch } from "react-icons/fa";
import SearchResults from "./SearchResults";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setSearchQuery("");
    setSearchResult([]);
  };

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

  const navigate = useNavigate();

  const handleSearchSelect = (item) => {
    setSearchQuery("");
    setSearchResult([]);

    if (item.media_type === "movie") {
      navigate(`/movie/${item.id}`);
    } else {
      navigate(`/tv/${item.id}`);
    }
  };

  // Clear search when menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setSearchQuery("");
      setSearchResult([]);
    }
  }, [mobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-[#020617] border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3">

        {/* Navbar Main */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <img
              src={logo}
              alt="CineBite Logo"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
            />

            <span className="text-xl sm:text-2xl font-bold text-white">
              Cine<span className="text-cyan-400">Bite</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-8">

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

            {/* Search Bar */}
            <div className="relative w-56 xl:w-64">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search movies & series..."
                  className="w-full bg-slate-900 border border-slate-700 text-white placeholder-gray-500 px-4 py-2.5 pr-11 rounded-full outline-none text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                />
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Search Result Dropdown */}
              {searchQuery.trim() && (
                <SearchResults
                  results={searchResult}
                  loading={searchLoading}
                  onSelect={handleSearchSelect}
                />
              )}
            </div>

          </div>

          {/* Desktop Login / Signup */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">

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
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-white hover:bg-slate-900 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <IoReorderThreeOutline className="text-3xl" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-slate-800 pt-4 pb-3">

            {/* Mobile Links */}
            <div className="flex flex-col text-center justify-center gap-2">

              <Link
                to="/"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-900 transition-all"
              >
                Home
              </Link>

              <Link
                to="/movies"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-900 transition-all"
              >
                Movies
              </Link>

              <Link
                to="/series"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-900 transition-all"
              >
                Series
              </Link>

              <Link
                to="/upcoming"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-900 transition-all"
              >
                Upcoming
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-900 transition-all"
              >
                About
              </Link>

              {/* Mobile Auth */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-slate-800">

                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="w-full sm:w-auto text-center px-5 py-3 rounded-lg border border-slate-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-all"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="w-full sm:w-auto text-center px-5 py-3 rounded-lg bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition-all"
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