import React from "react";
import { FaArrowLeft, FaEnvelope, FaLock, FaUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">

                {/* Black Button */}
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="group flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-slate-900/80 border border-slate-700 hover:border-cyan-400 hover:bg-cyan-400 transition-all duration-300 hover:scale-110"
                >
                    <FaArrowLeft
                        className="text-white group-hover:text-slate-950 transition-all duration-300 group-hover:-translate-x-1"
                    />
                </button>

                {/* Card */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                    {/* Heading */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            Create Account
                        </h1>

                        <p className="text-gray-400 mt-2">
                            Join CineBite and discover your next favorite movie
                        </p>
                    </div>

                    {/*Error
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-5 text-sm">
                            {error}
                        </div>
                    )}*/}

                    {/* Form */}
                    <form className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">
                                Full Name
                            </label>

                            <div className="relative">
                                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-11 pr-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">
                                Email Address
                            </label>

                            <div className="relative">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-11 pr-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Create a password"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-11 pr-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm text-gray-300 mb-2">
                                Confirm Password
                            </label>

                            <div className="relative">
                                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 pl-11 pr-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                                />
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-2 text-sm text-gray-400">
                            <input
                                type="checkbox"
                                required
                                className="mt-1 accent-cyan-400"
                            />

                            <p>
                                I agree to the{" "}
                                <span className="text-cyan-400 cursor-pointer">
                                    Terms & Conditions
                                </span>{" "}
                                and Privacy Policy.
                            </p>
                        </div>

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="text-center mt-7">
                        <p className="text-gray-400">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-cyan-400 hover:text-cyan-300 font-semibold"
                            >
                                Login
                            </Link>
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SignUp;