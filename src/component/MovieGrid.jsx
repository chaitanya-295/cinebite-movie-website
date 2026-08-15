import React from 'react';
import MovieCard from './MovieCard';
import { FaArrowRight } from "react-icons/fa";

function MovieGrid({ title, movies }) {
    return (
        <div>
            <div className='mt-4 mx-4 sm:mx-6 md:mx-10 lg:mx-16 mb-4 flex items-center justify-between'>
                <h2 className='text-cyan-200 text-xl sm:text-2xl md:text-3xl font-semibold'>
                    {title}
                </h2>

                <button className='flex items-center gap-2 text-gray-300 text-sm md:text-base font-semibold transition-all duration-300 hover:text-cyan-400 group'>
                    <span>See All</span>
                    <FaArrowRight className='text-sm transition-transform duration-300 group-hover:translate-x-1' />
                </button>
            </div>

            <div className="px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
                    {movies.slice(0, 7).map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieGrid;