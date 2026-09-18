import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { searchMovies, searchTV } from "../services/tmdbApi";

function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // Search Logic
    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const timer = setTimeout(async () => {
            try {
                setLoading(true);

                // Search movies and TV at the same time
                const [moviesResponse, tvResponse] = await Promise.all([
                    searchMovies(query),
                    searchTV(query),
                ]);

                // Movie results
                const movies = (moviesResponse.data?.results || []).map((movie) => ({
                    ...movie,
                    media_type: "movie",
                }));

                // Serie results
                const tvShows = (tvResponse.data?.results || []).map((show) => ({
                    ...show,
                    media_type: "serie",
                }));

                // Combine both 
                const combineResults = [...movies, ...tvShows];

                // Show only first 8
                setResults(combineResults.slice(0, 8));
            } catch (error) {
                console.error("Search error:", error);
                setResults([]);
            } finally {
                setLoading(false);
            }
        }, 400);

        // CLear previous timer
        return () => clearTimeout(timer);
    }, [query]);

    // when user clicks a result
    const handleResultClick = (item) => {
        setQuery("");
        setResults([]);

        if (item.media_type === "movie") {
            navigate(`/movie/${item.id}`);
        } else {
            navigate(`/serie/${item.id}`);
        }
    };

    // CLear Search
    const clearSearch = () => {
        setQuery("");
        setResults([]);
    };

    return (
        <div className="relative w-full max-w-md">

            {/* Search Input */}
            <div className="relative">

                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies & series..."
                    className="w-full bg-slate-900 border border-slate-700 text-white placeholder-gray-500 px-4 py-3 pr-12 rounded-full outlline-none text-sm focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                />

                {/* Search Icon */}
                {!query && (
                    <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                )}

                {/* Clear Icon */}
                {query && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                        <FaTimes />
                    </button>
                )}
            </div>

            {/* Search Results */}
            {query.trim() && (
                <div className="absolute top-[calc(100%+10px)] left-0 w-full bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50">

                    {/* Loading */}
                    {loading && (
                        <div className="p-4 text-center text-gray-400">
                            Searching...
                        </div>
                    )}

                    {/* Results */}
                    {!loading && results.length > 0 && (
                        <div className="max-h-[400px] overflow-y-auto">

                            {results.map((item) => {
                                const title = item.title || item.name;
                                const date = item.release_date || item.first_air_date;

                                return (
                                    <button
                                        key={`${item.media_type}-${item.id}`}
                                        onClick={() => handleResultClick(item)}
                                        className="w-full flex items-center gap-3 p-3 text-left hover:bg-slate-800 transition"
                                    >
                                        {/* Poster */}
                                        {item.poster_path ? (
                                            <img
                                                src={`https://image.tmdb.org/t/p/w92${item.poster_path}`}
                                                alt={title}
                                                className="w-10 h-14 object-cover rounded flex-shrink-0"
                                            />
                                        ) : (
                                            <div className="w-10 h-14 bg-slate-800 rounded flex items-center justify-center tet-xs text-gray-500">
                                                N/A
                                            </div>
                                        )}

                                        {/* Details */}
                                        <div className="min-w-0">
                                            <h3 className="text-white text-sm font-semibold truncate">
                                                {title}
                                            </h3>

                                            <p className="text-gray-400 text-xs mt-1">
                                                <span className="text-cyan-400">
                                                    {item.media_type === "movie" ? "Movie" : "Series"}
                                                </span>

                                                {date && (
                                                    <>
                                                        <span className="mx-2">•</span>
                                                        {date.slice(0, 4)}
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    {/* No results */}
                    {!loading && results.length === 0 && (
                        <div className="p-4 text-center text-gray-400 text-sm">
                            No movies or series found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SearchBar;