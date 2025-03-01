import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import Header from "./Header";

const SelectedMovie = () => {

    const movie = useSelector(state => state.movies?.SelectedMovie);
    console.log("--", movie);
    return ( movie && 
        <div>
            <Header/>
            <VideoBackground movieId={movie?.id} />
        </div>
    )
}

export default SelectedMovie;