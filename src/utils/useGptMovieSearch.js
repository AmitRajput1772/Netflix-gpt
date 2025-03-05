import { useDispatch } from "react-redux";
import { useRef } from "react";
import model from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult, setLoading } from "../utils/gptSlice";

const useGptMovieSearch = () => {
    const searchText = useRef();
    const dispatch = useDispatch();

    // Function to search movies in TMDB
    const searchMovieTMDB = async (movie) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
                API_OPTIONS
            );

            if (!response.ok) {
                throw new Error(`TMDB API Error: ${response.statusText}`);
            }

            const json = await response.json();
            return json.results?.[0] || null;
        } catch (error) {
            console.error(`Error fetching TMDB data for "${movie}":`, error);
            return null;
        }
    };

    // Function to handle search using GPT & TMDB
    const handleSearch = async () => {
        if (!searchText.current.value) return;

        dispatch(setLoading(true)); // ⬅️ Show shimmer before fetching

        const query = `Act as a Movie Recommendation System and suggest some movies for the query ${searchText.current.value}. Only give me names of 10 movies, comma-separated like this: Example Result: Gadar, Sholay, Don, Golmaal, Dabang`;

        try {
            // Sending input text to Gemini API
            const result = await model.generateContent(query);

            // Extracting movie names and trimming spaces
            const gptMovies = result.response?.candidates?.[0]?.content?.parts?.[0]?.text
                .split(",")
                .map(movie => movie.trim());

            console.log("Recommended Movies:", gptMovies);

            // Fetch movie details from TMDB
            const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
            const tmdbResults = await Promise.all(promiseArray);

            dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));

            console.log("TMDB Results:", tmdbResults);
        } catch (error) {
            console.error("Error in handleSearch:", error);
            dispatch(setLoading(false)); // ⬅️ Stop shimmer in case of error
        }
    };

    return { searchText, handleSearch };
};

export default useGptMovieSearch;
