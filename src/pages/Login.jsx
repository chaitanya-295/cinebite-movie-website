import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">

                {/* Back Button */}
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="group mb-6 flex items-center justify-center w-11 h-11 rounded-full bg-slate-900 border border-slate-700 text-white hover:bg-cyan-400 hover:text-slate-950 hover:border-cyan-400 transition-all duration-300"
                >
                    <FaArrowLeft className="text-sm transition-transform duration-300 group-hover:-translate-x-1" />
                </button>

                {/* Login Card */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white">
                            Login to
                            <span className="text-cyan-400"> CineBite</span>
                        </h1>

                        <p className="text-gray-400 mt-2">
                            Welcome back! Please login to your account.
                        </p>
                    </div>

                    <form className="space-y-5">

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                required
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                            />
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm text-gray-400">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-cyan-400"
                                />
                                Remember me
                            </label>

                            <Link
                                to="/forgot-password"
                                className="text-sm text-cyan-400 hover:text-cyan-300"
                            >
                                Forgot password
                            </Link>
                        </div>

                        {/* Login */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-cyan-400 text-slate-950 font-bold rounded-lg hover:bg-cyan-300 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                        >
                            Login
                        </button>
                    </form>

                    {/* Signup Link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-400 text-sm">
                            Don't have an account
                        </p>

                        <Link
                            to="/signup"
                            className="ml-2 text-cyan-400 font-semibold hover:text-cyan-300"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;