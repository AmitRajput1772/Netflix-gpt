import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUSer } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO, PHOTO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const searchView = useSelector(state => state.gpt.searchView);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUSer());
        }).catch(() => {
            navigate("/error");
        });
    };

    const handleGPTSearch = () => {
        navigate(searchView ? "/browse" : "/gpt-search");
        dispatch(toggleSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    useEffect(() => { }, [user]);

    return (
        <div className="absolute z-20 flex justify-between items-center w-full px-4 sm:px-8 py-3 bg-gradient-to-b from-black">
            {/* Logo */}
            <img className="w-28 sm:w-44" src={LOGO} alt="Logo" />

            {/* User & Controls */}
            {user && (
                <div className="flex items-center space-x-4 sm:space-x-6">
                    {/* Language Dropdown (Only show if searchView is active) */}
                    {searchView && (
                        <select
                            className="px-3 py-2 text-sm sm:text-base border text-white border-gray-300 rounded-lg bg-gray-600 shadow-md hover:border-red-500 focus:outline-none focus:ring focus:ring-red-400 transition duration-300 cursor-pointer"
                            onChange={handleLanguageChange}
                        >
                            {SUPPORTED_LANGUAGES.map(lang => (
                                <option key={lang.identifier} value={lang.identifier}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}

                    {/* GPT Search Button */}
                    <button
                        onClick={handleGPTSearch}
                        className="bg-red-600 cursor-pointer text-white p-2 sm:px-4 sm:py-2 rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
                    >
                        {searchView ? "Home Page" : "GPT Search"}
                    </button>

                    {/* User Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center"
                        >
                            <img
                                className="cursor-pointer w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white object-cover"
                                src={PHOTO_URL}
                                alt="User Icon"
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute right-0 top-full mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    {user.displayName}
                                </a>
                                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Settings
                                </a>
                                <hr className="my-1" />
                                <button
                                    onClick={handleSignOut}
                                    className="cursor-pointer block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
