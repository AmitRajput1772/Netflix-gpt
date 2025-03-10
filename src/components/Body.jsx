import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUSer } from "../utils/userSlice";
import SelectedMovie from "./SelectedMovie";
import GptSearch from "./GptSearch";

const Body = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    useEffect((effect) => { 
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUSer()); 
                navigate("/");
            }
        });

        // unsubscribe when the component unmounts
        return () => unsubscribe();
    }, [])
    
    
    return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/selectedMovie" element={<SelectedMovie />} />
            <Route path="/gpt-search" element={<GptSearch />} />
            </Routes>
    );
};

export default Body;
