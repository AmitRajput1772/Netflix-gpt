import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addSelectedMovie } from "../utils/moviesSlice";
import { useNavigate } from "react-router";

const MovieCard = ({ posterPath, movie }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (movie) => {
        dispatch(addSelectedMovie(movie));
        navigate("/selectedMovie");
    };

    return (
        <div className="relative flex items-center justify-center p-2 snap-center">
            <div
                onClick={() => handleClick(movie)}
                className="min-w-[6rem] sm:min-w-[7rem] md:min-w-[9rem] lg:min-w-[11rem] xl:min-w-[13rem] aspect-[2/3] hover:scale-110 hover:z-10 transition duration-300 ease-in-out cursor-pointer"
            >
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
