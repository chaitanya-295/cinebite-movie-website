import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";
import { searchMovies, searchTV } from "../services/tmdbApi";
import { FaSearch } from "react-icons/fa";

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

            {/* Search Bar */}
            <div className="relative w-64">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search movies & series..."
                  className="w-full bg-slate-900 border border-slate-700 text-white placeholder-gray-500 px-4 py-2 pr-10 rounded-full outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                />
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Search Result Dropdown */}
              {searchQuery.trim() && (
                <div className="absolute top-12 left-0 w-full bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">

                  {searchLoading ? (
                    <div className="p-4 text-center text-gray-400">
                      Searching...
                    </div>
                  ) : searchResult.length > 0 ? (
                    searchResult.map((item) => (
                      <div
                        key={`${item.media_type}-${item.id}`}
                        className="flex items-center gap-3 p-3 hover:bg-slate-800 cursor-pointer transition-colors"
                      >
                        {/* Poster */}
                        {item.poster_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w92${item.poster_path}`}
                            alt={item.title || item.name}
                            className="w-10 h-14 object-cover rounded"
                          />
                        ) : (
                          <div className="w-10 h-14 bg-slate-800 rounded flex items-center justify-center text-xs text-gray-500">
                            N/A
                          </div>
                        )}

                        {/* Information */}
                        <div className="min-w-0">
                          <h3 className="text-white text-sm font-semibold truncate">
                            {item.title || item.name}
                          </h3>

                          <p className="text-gray-400 text-xs mt-1">
                            {item.media_type === "movie" ? "Movie" : "TV Series"}

                            {" • "}

                            {(item.release_date || item.first_air_date)?.slice(0, 4)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-gray-400">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>

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