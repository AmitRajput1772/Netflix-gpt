import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/Validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE, PHOTO_URL } from "../utils/constants";
const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(name?.current?.value, email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // sign in / signup logic
    if (!isSignInForm) {
      // signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL,  
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = user;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse")
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (error.message = "EMAIL_EXISTS")
            setErrorMessage("Email Already Exists");
        });
    }
    else {
      // signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (error.message = "INVALID_LOGIN_CREDENTIALS")
          setErrorMessage("Invalid Email or Password");
        });
    }

  }
  return (
    <div className="relative w-full h-screen">
      {/* Netflix Logo */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 before:absolute before:inset-0 before:bg-black/60">
        <img
          src= {BG_IMAGE}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Form */}
      <div className="flex justify-center items-center min-h-screen w-full">
        <form onSubmit={(e) => e.preventDefault()} className="bg-black/60 p-8 rounded-lg text-white w-[350px] min-h-[450px] flex flex-col  justify-items-center m-auto">
          <h2 className="text-3xl font-bold mb-6 text-white ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSignInForm &&
            <input id="fullName"
              ref={name}
              className="p-3 mb-3 bg-black/10  border border-gray-500 rounded-md outline-none w-full text-white placeholder-gray-400"
              type="text"
              placeholder="Full Name"
            />}

          {/* Input Fields */}
          <input
            id="email"
            ref={email}
            className="p-3 mb-3 bg-black/10 bg-opacity-10 border border-gray-500 rounded-md outline-none w-full text-white placeholder-gray-400 autofill:bg-black/10"
            type="text"
            placeholder="Email or Mobile Number"
          />
          <input
            id="password"
            ref={password}
            autoComplete="new-password"
            className="p-3 mb-3 bg-black/10  border border-gray-500 rounded-md outline-none w-full text-white placeholder-gray-400"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-600 pb-4">{errorMessage}</p>

          {/* Sign In Button */}
          <button
            onClick={handleButtonClick}
            className="p-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* "OR" Text */}
          <p className="text-center my-3 text-gray-400">OR</p>

          {/* Forgot Password */}
          <p className="text-center my-3 text-sm text-gray-300 hover:underline cursor-pointer">
            Forgot Password?
          </p>

          {/* Remember Me Checkbox */}
          <div className="flex items-center justify-between text-sm text-gray-300 w-full">
            <label>
              <input id="rememberMe" type="checkbox" className="mr-2" />
              Remember Me
            </label>
          </div>

          {/* New to Netflix */}
          <p className=" mt-6 text-gray-400 "
          >
            {isSignInForm ? "New to Netflix? " : "Already a User? "}

            <span onClick={toggleSignInForm} className="text-white hover:underline cursor-pointer">
              {isSignInForm ? "Sign up now" : "Sign In"}

            </span>
          </p>
        </form>
      </div>

    </div>
  );
};

export default Login;
