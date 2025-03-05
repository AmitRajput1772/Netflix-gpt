import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    return (
        <div className="relative z-20 -mt-32 md:-mt-44 px-2 md:px-6">
            <MovieList title="Now Playing" movies={movies.NowPlayingMovies} />
            <MovieList title="Upcoming Movies" movies={movies.UpcomingMovies} />
            <MovieList title="Popular" movies={movies.PopularMovies} />
            <MovieList title="Top Rated Movies" movies={movies.TopRatedMovies} />
        </div>
    );
};

export default SecondaryContainer;
