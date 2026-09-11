import React from "react";
import { FaFilm, FaSearch, FaTv, FaStar, FaArrowRight } from "react-icons/fa";

function About() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Hero Section */}
            <section className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden">

                {/* Background Glow */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-5xl mx-auto text-center">

                    <p className="text-cyan-400 font-semibold tracking-widest uppercase mb-4">
                        Welcome to CineBite
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Your World of
                        <span className="text-cyan-400"> Movies & Series</span>
                    </h1>

                    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        CineBite is a movie and TV series discovery platform designed
                        to help you explore popular movies, upcoming releases,
                        top-rated films, and trending web series all in one place.
                    </p>

                </div>

            </section>


            {/* About Section */}
            <section className="px-6 md:px-12 lg:px-20 pb-16">

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    <div>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-cyan-400">CineBite</span>
                        </h2>

                        <p className="text-gray-400 leading-relaxed mb-5">
                            CineBite is built for movie and television lovers who
                            want a simple and enjoyable way to discover new content.
                            The platform provides information about movies and
                            series in an easy-to-use interface.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            From upcoming movies to popular web shows, CineBite
                            brings different categories together so you can quickly
                            find something interesting to watch.
                        </p>

                    </div>


                    {/* Feature Box */}

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">

                        <div className="grid grid-cols-2 gap-6">

                            <div className="text-center">
                                <FaFilm className="text-cyan-400 text-3xl mx-auto mb-3" />
                                <h3 className="font-semibold text-lg">
                                    Movies
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    Discover films
                                </p>
                            </div>

                            <div className="text-center">
                                <FaTv className="text-cyan-400 text-3xl mx-auto mb-3" />
                                <h3 className="font-semibold text-lg">
                                    Series
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    Explore TV shows
                                </p>
                            </div>

                            <div className="text-center">
                                <FaSearch className="text-cyan-400 text-3xl mx-auto mb-3" />
                                <h3 className="font-semibold text-lg">
                                    Search
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    Find your favorites
                                </p>
                            </div>

                            <div className="text-center">
                                <FaStar className="text-cyan-400 text-3xl mx-auto mb-3" />
                                <h3 className="font-semibold text-lg">
                                    Ratings
                                </h3>
                                <p className="text-gray-500 text-sm mt-1">
                                    Check movie ratings
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* What We Offer */}
            <section className="bg-slate-900/50 py-16 px-6 md:px-12 lg:px-20">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What We <span className="text-cyan-400">Offer</span>
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Everything you need to discover your next favorite movie
                            or series.
                        </p>

                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/50 transition">
                            <FaFilm className="text-cyan-400 text-2xl mb-4" />

                            <h3 className="text-lg font-semibold mb-2">
                                Latest Movies
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                Explore currently available and upcoming movies.
                            </p>
                        </div>


                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/50 transition">
                            <FaTv className="text-cyan-400 text-2xl mb-4" />

                            <h3 className="text-lg font-semibold mb-2">
                                TV Series
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                Discover popular and currently airing television
                                series.
                            </p>
                        </div>


                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/50 transition">
                            <FaStar className="text-cyan-400 text-2xl mb-4" />

                            <h3 className="text-lg font-semibold mb-2">
                                Ratings
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                View ratings to help you decide what to watch next.
                            </p>
                        </div>


                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400/50 transition">
                            <FaSearch className="text-cyan-400 text-2xl mb-4" />

                            <h3 className="text-lg font-semibold mb-2">
                                Easy Discovery
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed">
                                Quickly find movies and shows using our simple
                                interface.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="py-20 px-6">

                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-slate-800 rounded-2xl p-10">

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Find Something Great to Watch
                    </h2>

                    <p className="text-gray-400 mb-7">
                        Explore movies, discover series, and find your next
                        favorite entertainment.
                    </p>

                    <a
                        href="/movies"
                        className="inline-flex items-center gap-2 px-7 py-3 bg-cyan-400 text-slate-950 font-semibold rounded-full hover:bg-cyan-300 hover:scale-105 transition-all duration-300"
                    >
                        Explore Movies
                        <FaArrowRight />
                    </a>

                </div>

            </section>

        </div>
    );
}

export default About;