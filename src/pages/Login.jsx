import React from "react";

function Login() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-md w-full space-y-8 p-8 bg-slate-900 rounded-lg">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-white">
                        Login to CineBite
                    </h2>
                </div>

                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm space-y-4">
                        <input
                            type="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-300 focus:outline-none "
                            placeholder="Email address"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;