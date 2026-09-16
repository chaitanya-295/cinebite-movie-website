import React from "react";

function SearchResults({ results, loading, onSelect }) {
    return (
        <div className="absolute top-12 left-0 w-full bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden z-50 max-h-[420px] overflow-y-auto">
            {/* Loading  */}
            {loading ? (
                <div className="p-4 text-center text-gray-400">
                    Searching...
                </div>
            ) : results.length > 0 ? (

                /* Results */
                results.map((item) => (
                    <button
                        key={`${item.media_type}-${item.id}`}
                        type="button"
                        onClick={() => onSelect(item)}
                        className="w-full flex items-center gap-3 p-3 text-left hover:bg-slate-800 transition-colors"
                    >
                        {/* Poster */}
                        {item.poster_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w92${item.poster_path}`}
                                alt={item.title || item.name}
                                className="w-10 h-14 flex-shrink-0 object-cover rounded"
                            />
                        ) : (
                            <div className="w-10 h-14 flex-shrink-0 bg-slate-800 rounded flex items-center justify-center text-xs text-gray-500">
                                N/A
                            </div>
                        )}

                        {/* Information */}
                        <div className="min-w-0">
                            <h3 className="text-white text-sm font-semibold truncate">
                                {item.title || item.name}
                            </h3>

                            <p className="text-gray-400 text-xs mt-1">
                                <span className="text-cyan-400">
                                    {item.media_type === "movie" ? "Movie" : "Series"}
                                </span>

                                {" • "}

                                {(item.release_date || item.first_air_date)?.slice(0, 4) || "N/A"}
                            </p>
                        </div>
                    </button>
                ))
            ) : (
                /* No Results */
                <div className="p-4 text-center text-gray-400 text-sm">
                    No results found
                </div>
            )}
        </div>
    );
}

export default SearchResults;