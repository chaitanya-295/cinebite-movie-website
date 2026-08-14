import { useEffect, useState } from "react";
import Hero from "../component/Hero";
import MovieGrid from "../component/MovieGrid";
import { getTrendingMovies } from "../services/tmdbApi";

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

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

  return (
    <div className="bg-slate-950 min-h-screen">
      <Hero />

      <MovieGrid
        title="Trending Movies"
        movies={trendingMovies}
      />
    </div>
  );
}

export default Home;