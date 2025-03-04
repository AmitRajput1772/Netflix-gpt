import { useSelector } from "react-redux";

const normalizeText = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, ""); // Remove spaces and special characters
};

const GptMovieSuggestion = () => {
    const { movieResults, movieNames } = useSelector((store) => store.gpt);

    if (!movieNames || movieNames.length === 0) return null; // If no movies, return nothing

    return (
        <div className="p-5 mt-20 overflow-x-hidden relative w-full grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 justify-center">
            {movieNames.map((movieName, index) => {
                const normalizedMovieName = normalizeText(movieName);

                return (
                    <div key={index}>
                        {movieResults
                            .filter((movie) => normalizeText(movie.title).includes(normalizedMovieName))
                            .map((movie, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    {/* Movie Poster */}
                                    <div className="relative">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.title}
                                            className="w-full h-56 object-cover rounded-t-lg"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                            <h3 className="text-white text-sm font-semibold">{movie.title}</h3>
                                        </div>
                                    </div>

                                    {/* Movie Details */}
                                    <div className="p-3">
                                        <p className="text-gray-400 text-xs">{movie.release_date}</p>
                                        <p className="text-gray-300 text-xs mt-2 line-clamp-3">{movie.overview}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                );
            })}
        </div>
    );
};

export default GptMovieSuggestion;
