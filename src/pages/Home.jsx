import { useEffect, useState } from "react";
import Hero from "../component/Hero";
import MovieGrid from "../component/MovieGrid";
import { getPopularMovies, getTrendingMovies } from "../services/tmdbApi";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();

        const movies = response.data.results || [];

        console.log("Movies:", movies);

        setTrendingMovies(movies);
      } catch (error) {
        console.log("Error Fetching Movie", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await getPopularMovies();

        const movies = response.data.results || [];

        console.log("Movies:", movies);

        setPopularMovies(movies);
      } catch (error) {
        console.log("Error Fetching Movie", error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      <Hero />

      <MovieGrid
        title="Trending Movies"
        movies={trendingMovies}
      />

      <MovieGrid
        title="Popular Movies"
        movies={popularMovies}
      />

    </div>
  );
}

export default Home;