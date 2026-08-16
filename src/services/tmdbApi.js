import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: API_KEY,
        language: "en-US",
    },
});

export const getTrendingMovies = () =>
    tmdbApi.get("/trending/movie/week");

export const getPopularMovies = () =>
    tmdbApi.get("/movie/popular");

export const getTopRatedMovies = () =>
    tmdbApi.get("/movie/top_rated");

export const getUpcomingMovies = () =>
    tmdbApi.get("/movie/upcoming");

export const getNowPlayingMovies = (page = 1) =>
    tmdbApi.get("/movie/now_playing", {
        params: { page },
    });

export const getPopularTV = (page = 1) =>
    tmdbApi.get("/tv/popular", {
        params: { page },
    });

export const searchMovies = (query) =>
    tmdbApi.get("/search/movie", {
        params: {
            query,
        },
    });

export const getMovieDetails = (movieId) =>
    tmdbApi.get(`/movie/${movieId}`, {
        params: {
            append_to_response: "credits,videos",
        },
    });