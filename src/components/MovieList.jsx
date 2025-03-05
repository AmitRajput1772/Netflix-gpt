import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) return null;

    return (
        <div className="p-2 md:p-4">
            <h2 className="text-lg md:text-2xl lg:text-3xl mb-2 text-white font-bold">
                {title}
            </h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
