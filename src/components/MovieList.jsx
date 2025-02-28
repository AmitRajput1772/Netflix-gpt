import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) return null;

    return (
        <div className="p-4">
            <h2 className="text-2xl  mb-2 text-white font-bold">{title}</h2>
            <div className="flex gap-4 overflow-x-scroll scrollbar-hide no-scrollbar snap-x snap-mandatory">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
