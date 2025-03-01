import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addSelectedMovie } from "../utils/moviesSlice";
import { useNavigate } from "react-router";

const MovieCard = ({ posterPath, movie }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (movie) => {
        console.log("selected movie is ", movie);
        dispatch(addSelectedMovie(movie));
        navigate("/selectedMovie");

    }
    return (
        <div className="w-full relative h-80 flex items-center justify-center p-2">
            <div
                onClick={() => handleClick(movie)}
                className="transform min-w-28  sm:min-w-32 md:min-w-36 lg:min-w-40 xl:min-w-44 aspect-[2/3]  hover:z-10 transition duration-500 hover:scale-125 flex justify-center items-center">
                <img
                    src={IMG_CDN_URL + posterPath}
                    alt="moviecard"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default MovieCard;
