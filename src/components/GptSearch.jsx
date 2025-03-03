import { BG_IMAGE } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import Header from "./Header"; // Assuming you have a Header component

const GptSearch = () => {
    return (
        <div className="relative h-screen w-screen bg-black">
            {/* Background Image */}
            <img
                alt="bg_image"
                src={BG_IMAGE}
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Search Bar (Positioned below Header) */}
            <GptSearchBar />
            <GptMovieSuggestion/>
        </div>
    );
};

export default GptSearch;
