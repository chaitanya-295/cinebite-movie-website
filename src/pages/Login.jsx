import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function Login() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">

                {/* Back Button */}
                <button
                    type="button"
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;