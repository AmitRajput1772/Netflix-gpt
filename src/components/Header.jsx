import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
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
    const searchView = useSelector(state => state.gptSlice.searchView);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUSer());
            // navigate("/");
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }

    const handleGPTSearch = () => {
        dispatch(toggleSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    useEffect(() => {
    }, [user])

    return (
        <div className="absolute z-20 flex justify-between items-center w-full px-8  bg-gradient-to-b from-black">
            {/* Netflix Logo */}
            <img
                className="w-44"
                src= {LOGO}
            />

            {user && <div className="relative flex gap-6">

                {searchView &&  
                    <select
                        className="px-4 py-2 text-lg border text-white border-gray-300 rounded-lg bg-gray-600 shadow-md hover:border-red-500 focus:outline-none focus:ring focus:ring-red-400 transition duration-300 cursor-pointer"
                        onClick={handleLanguageChange}
                    >
                        {SUPPORTED_LANGUAGES.map(lang => (
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                }

                <button
                    onClick={handleGPTSearch} // Function to handle click
                    className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    {searchView ? "Home Page" : "Gpt Search"}
                </button>

                {/* User Icon Button (Toggles Dropdown) */}
                <div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center space-x-2"
                    >
                        <img
                            className="cursor-pointer w-12 h-12 rounded-full border-2 border-white object-cover"
                            src={PHOTO_URL}
                            alt="User Icon"
                        />

                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-10 
                        before:content-[''] before:absolute before:top-[-16px] before:right-6 
                        before:border-[10px] before:border-transparent before:border-b-white">

                            {/* Triangle Above Dropdown */}

                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{user.displayName}</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                            <hr className="my-1" />
                            <button
                                onClick={handleSignOut}
                                className="cursor-pointer block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                                Sign Out
                            </button>
                        </div>
                    )}
                </div>
                
            </div>}
        </div>

    )
}

export default Header;