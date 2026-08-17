import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const tmdbApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: API_KEY,
        language: "en-US",
    },
});

export const getAllMovies = (page = 1) =>
    tmdbApi.get("/discover/movie", {
        params: {
            page,
        },
    });

export const getTrendingMovies = (page = 1) =>
    tmdbApi.get("/trending/movie/week", {
        params: {
            page,
        },
    });

export const getPopularMovies = (page = 1) =>
    tmdbApi.get("/movie/popular", {
        params: {
            page,
        },
    });

export const getTopRatedMovies = (page = 1) =>
    tmdbApi.get("/movie/top_rated", {
        params: {
            page,
        },
    });

export const getUpcomingMovies = (page = 1) =>
    tmdbApi.get("/movie/upcoming", {
        params: {
            page,
        },
    });

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

export const getAiringTodayTV = (page = 1) =>
    tmdbApi.get("/tv/airing_today", {
        params: {
            language: "en-US",
            page,
        },
    });

export const getMovieDetails = (movieId) =>
    tmdbApi.get(`/movie/${movieId}`, {
        params: {
            append_to_response: "credits,videos",
        },
    });