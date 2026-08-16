import { useEffect, useState } from "react";
import Hero from "../component/Hero";
import MovieGrid from "../component/MovieGrid";
import { getAiringTodayTV, getNowPlayingMovies, getPopularTV, getTopRatedMovies } from "../services/tmdbApi";

function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Hero />

      <MovieGrid
        title="Now Playing Movies"
        fetchFunction={getNowPlayingMovies}
      />

      <MovieGrid
        title="Popular Web Show"
        fetchFunction={getPopularTV}
      />

      <MovieGrid
        title="Top Rated Movies"
        fetchFunction={getTopRatedMovies}
      />

      <MovieGrid
        title="Currently Airing Shows"
        fetchFunction={getAiringTodayTV}
      />
    </div>
  );
}

export default Home;