import React, { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";
import { getAllMovies } from "../services/tmdbApi";
import { useLocation } from "react-router-dom";
import { getAiringTodayTV, getNowPlayingMovies, getPopularTV, getTopRatedMovies } from "../services/tmdbApi";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const location = useLocation();

    const {
        type = "movies",
    } = location.state || {};

    const pageTitles = {
        movies: "Explore Movies",
        now_playing: "Now Playing Movies",
        popular_tv: "Popular Web Shows",
        top_rated: "Top Rated Movies",
        airing_today: "Currently Airing Shows",
    };

    const currentTitle = pageTitles[type] || "Explore Movies";

    useEffect(() => {
        setPage(1);
        setMovies([]);
    }, [type]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);

                let fetchFunction;
                let title;

                switch (type) {

                    case "now_playing":
                        fetchFunction = getNowPlayingMovies;
                        break;

                    case "popular_tv":
                        fetchFunction = getPopularTV;
                        break;

                    case "top_rated":
                        fetchFunction = getTopRatedMovies;
                        break;

                    case "airing_today":
                        fetchFunction = getAiringTodayTV;
                        break;

                    default:
                        fetchFunction = getAllMovies;
                }

                const response = await fetchFunction(page);

                const newMovies = response.data?.results || [];

                if (page === 1) {
                    setMovies(newMovies);
                } else {
                    setMovies((prevMovies) => [
                        ...prevMovies,
                        ...newMovies,
                    ]);
                }

            } catch (error) {
                console.log("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [type, page]);

    return (
        <div className="min-h-screen bg-slate-950 px-4 sm:px-6 md:px-10 lg:px-16 py-10">

            <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                {/* Heading */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        {currentTitle}
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Discover popular movies from around the world.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full sm:w-72 md:w-80 lg:w-96">

                    <input
                        type="text"
                        placeholder="Search for movies..."
                        className="w-full bg-slate-900 border border-slate-700 text-white placeholder-gray-500 px-5 py-3 pr-12 rounded-full outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    />

                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-colors"
                    >
                        🔍
                    </button>
                </div>

            </div>

            {/* Loading */}
            {loading ? (
                <div className="flex justify-center items-center h-60">
                    <p className="text-cyan-400 text-lg">
                        Loading movies...
                    </p>
                </div>
            ) : (
                <>
                    {/* Movie Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </div>

                    {!loading && movies.length > 0 && (
                        <div className="flex justify-center mt-10">

                            <button
                                onClick={() => setPage((prev) => prev + 1)}
                                className="px-8 py-3 bg-cyan-400 text-slate-950 font-semibold rounded-full hover:bg-cyan-300 hover:scale-105 transition-all duration-300"
                            >
                                Load More
                            </button>
                        </div>
                    )}

                    {/* Empty State */}
                    {movies.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-400">
                                No movies found.
                            </p>
                        </div>
                    )}
                </>
            )}

        </div>
    );
}

export default Movies;