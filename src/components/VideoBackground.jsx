import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    
    console.log("movieId", movieId);
    useMovieTrailer(movieId);
    const trailerVideo = useSelector(state => state.movies?.trailerVideo);
    console.log(trailerVideo?.key);

    return (
        <div className="w-screen absolute top-0 left-0  h-full object-cover ">
            <iframe
                className="w-screen  aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&enablejsapi=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>
    )
}

export default VideoBackground;