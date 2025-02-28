import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
    return (
        <div className="min-w-28 sm:min-w-32 md:min-w-36 lg:min-w-40 xl:min-w-44 aspect-[2/3] overflow-hidden rounded-lg shadow-lg snap-start transition-transform duration-300 ease-in-out hover:scale-110">
            <img
                src={IMG_CDN_URL + posterPath}
                alt="moviecard"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default MovieCard;
