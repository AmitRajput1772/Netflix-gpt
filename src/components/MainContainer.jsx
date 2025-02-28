import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector((state) => state.movies?.NowPlayingMovies);
    if (!movies) return;


    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
    return (
        <div className="relative flex flex-col lg:flex-row w-full h-screen overflow-hidden">
            <VideoBackground movieId={id} />
            <VideoTitle title={original_title} overview={overview} />
        </div>
    )
};

export default MainContainer;