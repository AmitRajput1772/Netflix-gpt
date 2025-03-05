import { useSelector } from "react-redux";
import ShimmerCard from "../utils/shimmerCard";

// Shimmer UI Component


const GptMovieSuggestion = () => {
    const { movieResults, loading } = useSelector((store) => store.gpt);

    return (
        <div className="p-5 mt-20 overflow-x-hidden absolute w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
                {/* Show shimmer only while loading */}
                {loading
                    ? Array(8).fill(null).map((_, idx) => <ShimmerCard key={idx} />)
                    : movieResults?.length > 0
                        ? movieResults
                            .filter((movie) => movie && movie.poster_path)
                            .map((movie, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    {/* Movie Poster */}
                                    <div className="relative">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.title || "No title available"}
                                            className="w-full h-56 object-cover object-top rounded-t-lg"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                            <h3 className="text-white text-sm font-semibold">{movie.title || "Unknown Movie"}</h3>
                                        </div>
                                    </div>

                                    {/* Movie Details */}
                                    <div className="p-3">
                                        <p className="text-gray-400 text-xs">{movie.release_date || "Unknown Date"}</p>
                                        <p className="text-gray-300 text-xs mt-2 line-clamp-3">{movie.overview || "No description available."}</p>
                                    </div>
                                </div>
                            ))
                        : null}
            </div>
        </div>
    );
};

export default GptMovieSuggestion;
