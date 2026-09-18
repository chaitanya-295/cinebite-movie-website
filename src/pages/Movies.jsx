import React, { useEffect, useState } from "react";
import MovieCard from "../component/MovieCard";
import { useLocation } from "react-router-dom";
import { getAllMovies, getAiringTodayTV, getNowPlayingMovies, getPopularTV, getTopRatedMovies, searchTV } from "../services/tmdbApi";
import { FaArrowLeft } from "react-icons/fa";
import SearchBar from "../component/SearchBar";

function Movies({ title, fetchFunction }) {
    const location = useLocation();

    const type = location.state?.type || null;

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    // Separate loading states
    const [initialLoading, setInitialLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);

    const [hasMore, setHasMore] = useState(true);

    const pageTitles = {
        movies: "Explore Movies",
        now_playing: "Now Playing Movies",
        popular_tv: "Popular Web Shows",
        top_rated: "Top Rated Movies",
        airing_today: "Currently Airing Shows",
    };

    const currentTitle = type ? pageTitles[type] : title || "Explore Movies";


    // Get API function
    const getFetchFunction = () => {
        switch (type) {
            case "now_playing":
                return getNowPlayingMovies;

            case "popular_tv":
                return getPopularTV;

            case "top_rated":
                return getTopRatedMovies;

            case "airing_today":
                return getAiringTodayTV;

            default:
                return getAllMovies;
        }
    };


    // Reset when category changes
    useEffect(() => {
        setMovies([]);
        setPage(1);
        setHasMore(true);
        setInitialLoading(true);
    }, [type, fetchFunction]);


    // Fetch movies
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiFunction = type ? getFetchFunction() : fetchFunction;

                if (!apiFunction) {
                    console.error("No API function provided");
                    return;
                }

                const response = await apiFunction(page);

                const newMovies = response.data?.results || [];

                const totalPages = response.data?.total_pages || 1;

                if (page === 1) {
                    setMovies(newMovies);
                } else {
                    setMovies((prevMovies) => [
                        ...prevMovies,
                        ...newMovies,
                    ]);
                }

                // Check if there are more pages
                if (page >= totalPages || newMovies.length === 0) {
                    setHasMore(false);
                }

            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setInitialLoading(false);
                setLoadingMore(false);
            }
        };

        fetchMovies();
    }, [fetchFunction, type, page]);


    // Load More
    const handleLoadMore = () => {
        if (loadingMore || !hasMore) {
            return;
        }

        setLoadingMore(true);
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className="min-h-screen bg-slate-950 px-4 sm:px-6 md:px-10 lg:px-16 py-10">

            <button
                type="button"
                onClick={() => window.history.back()}
                className="group flex mb-5 items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900/80 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
                <FaArrowLeft className="text-white group-hover:text-slate-950 transition-all duration-300 group-hover:-translate-x-1 w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Header */}
            <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {currentTitle}
                    </h1>

                    <p className="text-gray-400">
                        Discover movies and shows from around the world.
                    </p>
                </div>


                {/* Search */}
                <SearchBar />

            </div>


            {/* First Page Loading */}
            {initialLoading ? (

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


                    {/* Load More */}
                    {movies.length > 0 && hasMore && (

                        <div className="flex justify-center mt-10">

                            <button
                                type="button"
                                onClick={handleLoadMore}
                                disabled={loadingMore}
                                className="px-8 py-3 bg-cyan-400 text-slate-950 font-semibold rounded-full hover:bg-cyan-300 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loadingMore
                                    ? "Loading..."
                                    : "Load More"}
                            </button>

                        </div>

                    )}

                    {/* No More */}
                    {!hasMore && movies.length > 0 && (
                        <p className="text-center text-gray-500 mt-10">
                            No more movies to load.
                        </p>
                    )}

                    {/* Empty */}
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