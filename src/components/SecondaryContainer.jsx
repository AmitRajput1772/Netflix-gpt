import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);

    return (
        <div className=" z-20 -mt-44 ">
            <div className="">
                <MovieList title={"Now Playing"} movies={movies.NowPlayingMovies} />
                <MovieList title={"UpComing Movies"} movies={movies.UpcomingMovies} />
                <MovieList title={"Popular"} movies={movies.PopularMovies} />
                <MovieList title={"Top rated Movies"} movies={movies.TopRatedMovies} />
            </div>
            
        </div>
    );
};

export default SecondaryContainer;
