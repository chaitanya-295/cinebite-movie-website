import React from "react";

function MovieCard({ movie }) {
    const getRatingColor = (rating) => {
        if (rating >= 7.5) return 'bg-green-500';
        if (rating >= 6) return 'bg-yellow-400';
        return 'bg-red-500';
    }

    return (
        <div className="relative w-full h-[280px] sm:h-[320px] overflow-hidden rounded-lg bg-[#1e1e1e] p-1 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
            <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="w-full h-[215px] sm:h-[250px] object-cover rounded"
            />

            {movie.vote_average ? (
                <div className={`absolute top-2 right-2 text-[10px] sm:text-xs font-bold px-2 py-1 rounded ${getRatingColor(movie.vote_average)}`}>
                    ★ {movie.vote_average.toFixed(1)}
                </div>
            ) : null}

            <div className="absolute bottom-0 left-0 w-full bg-[#1e1e1e] text-white text-center py-2 px-2">
                <p className="text-sm sm:text-base font-semibold truncate">
                    {movie.title || movie.name}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    {movie.release_date.slice(0, 4) || movie.first_air_date.slice(0, 4)}
                </p>
            </div>
        </div>
    );
}

export default MovieCard;