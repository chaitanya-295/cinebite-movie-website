import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/tmdbApi.js";

function Home() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchMovies = async () => {

      try {

        const response = await getPopularMovies();

        console.log(response.data);

        setMovies(response.data.results);

      } catch (error) {

        console.error("Error fetching movies:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchMovies();

  }, []);

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="text-white">

      <h1 className="text-3xl font-bold">
        Popular Movies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">

        {movies.map((movie) => (

          <div key={movie.id}>

            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="rounded-lg"
            />

            <h2 className="mt-2 font-semibold">
              {movie.title}
            </h2>

            <p className="text-gray-400">
              ⭐ {movie.vote_average.toFixed(1)}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;