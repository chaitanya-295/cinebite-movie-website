import React, { useEffect, useState, useRef } from "react";
import { getTrendingMovies } from '../services/tmdbApi.js';
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";

function Hero() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleStart, setVisibleStart] = useState(0);

  const autoSlideRef = useRef(null);

  // Fetch movies
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();

        const movies = response.data.results || [];

        setTrendingMovies(movies);
        setCurrentIndex(0);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  // Privious slide
  const prevSlide = () => {
    if (trendingMovies.length === 0) return;

    setCurrentIndex((prev) => {
      return prev === 0 ? trendingMovies.length - 1 : prev - 1
    });

    setVisibleStart((prev) => {
      return prev === 0 ? trendingMovies.length - 1 : prev - 1;
    });
  };

  // Next Slide
  const nextSlide = () => {
    if (trendingMovies.length === 0) return;

    setCurrentIndex((prev) => {
      return (prev + 1) % trendingMovies.length;
    });

    setVisibleStart((prev) => {
      return (prev + 1) % trendingMovies.length;
    });
  };

  // Go to specific slide
  const goToSlide = (index) => {
    if (index >= 0 && index < trendingMovies.length) {
      setCurrentIndex(index);
    }
  };

  // Store latest nextSlide
  useEffect(() => {
    autoSlideRef.current = nextSlide;
  });

  // Auto slide
  useEffect(() => {
    if (trendingMovies.length === 0) return;

    const interval = setInterval(() => {
      if (autoSlideRef.current) {
        autoSlideRef.current();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [trendingMovies.length]);

  // Loading
  if (trendingMovies.length === 0) {
    return (
      <div className="h-[550px] flex items-center justify-center text-white">
        Loading.....
      </div>
    );
  }

  // Safety: make sure index is valid
  const safeIndex = currentIndex >= trendingMovies.length ? 0 : currentIndex;

  const movie = trendingMovies[safeIndex];

  // Extra safety
  if (!movie) {
    return null;
  }

  return (
    <div className="relative w-full h-[550px] overflow-hidden">

      {/* Backgound Image */}
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        className="absolute insert-0 w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-24">

        <div className="max-w-2xl text-white">
          <p className="text-cyan-400 font-semibold mb-3">
            Trending Now
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {movie.title}
          </h1>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-yellow-400">
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>

            <span className="text-gray-300">
              {movie.release_date?.slice(0, 4)}
            </span>
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4 mt-6">
            {/* Watch Now */}
            <button
              className="felx items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-cyan-400 text-black font-semibold text-sm sm:text-base rounded-full hover:bg-cyan-300 transition-all duration-300"
            >
              ▶ Watch Now
            </button>

            {/* More Details */}
            <button
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm sm:text-base rounded-full hover:bg-white/20 transition-all duration-300"
            >
              ⓘ More Details
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center p-4 bg-black/40 text-white rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <FaLessThan />
            </button>
            <button
              onClick={nextSlide}
              className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center p-4 bg-black/40 text-white rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              <FaGreaterThan />
            </button>
          </div>

        </div>
      </div>

      {/* Movie Thumbnail Cards */}
      {/* Movie Carousel */}
      <div className="absolute bottom-3 left-4 sm:left-8 md:left-12 lg:left-20 w-[90%] overflow-hidden z-30">
        <div className="flex justify-start gap-4">

          <AnimatePresence initial={false} mode="popLayout">

            {Array.from({ length: 5 }).map((_, position) => {

              const movieIndex = (visibleStart + position) % trendingMovies.length;
              const movie = trendingMovies[movieIndex];

              return (
                <motion.button
                  key={movie.id}
                  layout
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  onClick={() => {
                    setCurrentIndex(movieIndex);
                    setVisibleStart(movieIndex);
                  }}
                  className={`relative flex-shrink-0 w-16 h-24 sm:w-20 sm:h-28 overflow-hidden rounded-lg
                    ${currentIndex === movieIndex
                      ? "scale-130 border-2 border-cyan-400 z-10 opacity-100 shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                      : "scale-100 border border-white/20 opacity-60"
                    }
                  `}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              );

            })}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Hero;