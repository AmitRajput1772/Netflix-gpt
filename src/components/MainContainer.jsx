import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.NowPlayingMovies);
    if (!movies) return null;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative w-full">
            <VideoBackground movieId={id} />
            {/* Movie title now moves below video on smaller screens */}
            <div className="md:absolute md:top-0 md:left-0 md:w-full md:h-full flex flex-col md:justify-end">
                <VideoTitle title={original_title} overview={overview} />
            </div>
        </div>
    );
};

export default MainContainer;
