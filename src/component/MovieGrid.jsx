import React from 'react';
import MovieCard from './MovieCard';
import { FaArrowRight } from "react-icons/fa";

function MovieGrid({ title, movies }) {
    return (
        <div>
            <div className='mt-4 mx-6 md:mx-10 lg:mx-16 mb-4 flex items-center justify-between'>
                <h2 className='text-cyan-200 text-2xl md:text-3xl font-semibold mb-3'>
                    {title}
                </h2>

                <button className='flex items-center gap-2 text-white text-sm md:text-base font-semibold transition-all duration-300 hover:text-cyan-300 hover:gap-3 group'>
                    See All <FaArrowRight text-sm transition-transform duration-300 group-hover:translate-x-1/>
                </button>
            </div>

            <div className="overflow-hidden pb-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {movies.slice(0, 8).map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieGrid;