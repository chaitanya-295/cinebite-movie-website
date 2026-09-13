import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">

                {/* Black Button */}
                <button
                    type="button"
                    onClick={() => Navigate(-1)}
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

                    {/* Error */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-5 text-sm">
                            {error}
                        </div>
                    )}


                </div>
            </div>
        </div>
    )
}

export default SignUp;