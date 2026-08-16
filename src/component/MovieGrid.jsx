import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { FaArrowRight } from "react-icons/fa";

function MovieGrid({ title, fetchFunction }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetchFunction();

                const movies = response.data.results || [];

                setMovies(movies);
            } catch (error) {
                console.log("Error Fetching Movies", error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <div className='mt-4 mx-4 sm:mx-6 md:mx-10 lg:mx-16 mb-4 flex items-center justify-between'>
                <h2 className='text-cyan-200 text-xl sm:text-1xl md:text-2xl font-semibold'>
                    {title}
                </h2>

                <button className='flex items-center gap-2 text-gray-300 text-sm md:text-base font-semibold transition-all duration-300 hover:text-cyan-400 group'>
                    <span>See All</span>
                    <FaArrowRight className='text-sm transition-transform duration-300 group-hover:translate-x-1' />
                </button>
            </div>

            <div className="px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="flex-shrink-0 w-36 sm:w-40 md:w-44 lg:w-48"
                        >
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieGrid;