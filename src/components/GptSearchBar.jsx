import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import useGptMovieSearch from "../utils/useGptMovieSearch";

const GptSearchBar = () => {
    const { searchText, handleSearch } = useGptMovieSearch();
    const langKey = useSelector((store) => store.config.lang);

    return (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full px-4 sm:max-w-md md:max-w-2xl">
            <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
                <input
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceHolder}
                    className="w-full p-3 text-gray-700 outline-none focus:ring focus:ring-red-400"
                    ref={searchText}
                />
                <button
                    onClick={handleSearch}
                    className="bg-red-600 cursor-pointer text-white px-5 py-3 hover:bg-red-700 transition">
                    {lang[langKey].search}
                </button>
            </div>
        </div>
    );
};

export default GptSearchBar;
