import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeUSer } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUSer());
            navigate("/");
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
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            />

            {user && <div className="relative">
                {/* User Icon Button (Toggles Dropdown) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-2"
                >
                    <img
                        className="cursor-pointer w-12 h-12 rounded-full border-2 border-white object-cover"
                        src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
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