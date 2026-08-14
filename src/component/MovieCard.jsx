import React from "react";

function MovieCard({ movie }) {
    return (
        <div className="relative w-36 h-[320px] md:w-46 rounded overflow-hidden shadow-lg grow-0 shrink-0 basis-auto hover:scale-105 transition duration-300 cursor-pointer bg-white dark:bg-[#1e1e1e] p-1">

            {/* Movie Poster */}
            <div className="w-full aspect-[2/3]">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Movie Details */}
            <div className="px-2 py-2">
                <h3 className="text-white text-lg font-bold leading-7">
                    {movie.title}
                </h3>

                {movie.release_date && (
                    <p className="text-gray-400 text-sm mt-1">
                        {movie.release_date.slice(0, 4)}
                    </p>
                )}
            </div>

        </div>
    );
}

export default MovieCard;