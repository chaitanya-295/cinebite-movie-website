import { useEffect, useState } from "react";
import Hero from "../component/Hero";
import MovieGrid from "../component/MovieGrid";
import { getNowPlayingMovies, getPopularTV, getTopRatedMovies } from "../services/tmdbApi";

function Home() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [tvshow, setTvShow] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await getNowPlayingMovies();

        const movies = response.data.results || [];

        console.log("Movies:", movies);

        setNowPlayingMovies(movies);
      } catch (error) {
        console.log("Error Fetching Movie", error);
      }
    };

    fetchNowPlayingMovies();
  }, []);

  useEffect(() => {
    const fetchTvShow = async () => {
      try {
        const response = await getPopularTV();

        const tvShow = response.data.results || [];

        console.log("TV Show:", tvShow);

        setTvShow(tvShow);
      } catch (error) {
        console.log("Error Fetching Web Show", error);
      }
    };

    fetchTvShow();
  }, []);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await getTopRatedMovies();

        const topMovies = response.data.results || [];

        console.log("Top Movies:", topMovies);

        setTopMovies(topMovies);
      } catch (error) {
        console.log("Error Fetching Top Movies", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      <Hero />

      <MovieGrid
        title="Now Playing Movies"
        movies={nowPlayingMovies}
      />

      <MovieGrid
        title="Popular Web Show"
        movies={tvshow}
      />

      <MovieGrid
        title="Top Rated Movies"
        movies={topMovies}
      />



    </div>
  );
}

export default Home;