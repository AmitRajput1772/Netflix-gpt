import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeUSer } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO, PHOTO_URL } from "../utils/constants";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

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

    useEffect(() => {
    }, [user])

    return (
        <div className="absolute flex justify-between items-center w-full px-8 py-2 bg-gradient-to-b from-black">
            {/* Netflix Logo */}
            <img
                className="w-44"
                src= {LOGO}
            />

            {user && <div className="relative">
                {/* User Icon Button (Toggles Dropdown) */}
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
                { isOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-10 
                        before:content-[''] before:absolute before:top-[-16px] before:right-6 
                        before:border-[10px] before:border-transparent before:border-b-white">

                        {/* Triangle Above Dropdown */}

                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{user.displayName }</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                        <hr className="my-1" />
                        <button
                            onClick={handleSignOut }
                            className="cursor-pointer block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                            Sign Out
                        </button>
                    </div>
                )}
            </div>}
        </div>

    )
}

export default Header;