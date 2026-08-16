import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#020617] border-t border-slate-800 text-gray-400">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & Description */}
                    <div>
                        <Link
                            to="/"
                            className="flex items-center gap-2 w-fit"
                        >
                            <img
                                src={logo}
                                alt="CineBite Logo"
                                className="w-10 h-10 object-contain"
                            />

                            <span className="text-2xl font-bold text-white">
                                Cine<span className="text-cyan-400">Bite</span>
                            </span>
                        </Link>

                        <p className="mt-4 text-sm leading-6 text-gray-400">
                            Discover trending movies, popular films, top-rated movies,
                            and the latest web series — all in one place.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 mt-6">
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Navigation
                        </h3>

                        <div className="flex flex-col gap-3 text-sm">
                            <Link
                                to="/"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Home
                            </Link>

                            <Link
                                to="/movies"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Movies
                            </Link>

                            <Link
                                to="/tv-shows"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                TV Shows
                            </Link>

                            <Link
                                to="/popular"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Popular
                            </Link>

                            <Link
                                to="/top-rated"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Top Rated
                            </Link>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Categories
                        </h3>

                        <div className="flex flex-col gap-3 text-sm">
                            <Link
                                to="/movies/action"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Action
                            </Link>

                            <Link
                                to="/movies/comedy"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Comedy
                            </Link>

                            <Link
                                to="/movies/drama"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Drama
                            </Link>

                            <Link
                                to="/movies/horror"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Horror
                            </Link>

                            <Link
                                to="/movies/scifi"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Sci-Fi
                            </Link>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Support
                        </h3>

                        <div className="flex flex-col gap-3 text-sm">
                            <Link
                                to="/about"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                About Us
                            </Link>

                            <Link
                                to="/contact"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Contact Us
                            </Link>

                            <Link
                                to="/privacy"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                to="/terms"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                to="/favorites"
                                className="hover:text-cyan-400 transition-colors"
                            >
                                My Favorites
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">

                    <p className="text-gray-500 text-center sm:text-left">
                        © {new Date().getFullYear()} CineBite. All rights reserved.
                    </p>

                    <p className="text-gray-500">
                        Made with <span className="text-cyan-400">♥</span> for movie lovers
                    </p>

                </div>
            </div>

        </footer>
    );
}

export default Footer;