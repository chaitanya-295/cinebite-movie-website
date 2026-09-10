import React from "react";

function Loader() {
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">

                <div className="w-12 h-12 border-4 border-slate-700 border-t-cyan-400 rounded-full animate-spin"></div>

                <p className="text-cyan-400 text-lg font-semibold">
                    Loading...
                </p>
            </div>
        </div>
    )
}

export default Loader;