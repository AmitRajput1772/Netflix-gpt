import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    return (
        <div className="relative -mt-52  z-20 ">
                <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
                <MovieList title={"Trending"} movies={movies.NowPlayingMovies} />
                <MovieList title={"Popular"} movies={movies.NowPlayingMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.NowPlayingMovies} />
        </div>
    );
};

export default SecondaryContainer;
