import { GoogleGenerativeAI } from "@google/generative-ai";
import { Gemini_KEY } from "./constants";

// Ensure you set the API key in an environment variable
const API_KEY = Gemini_KEY;

if (!API_KEY) {
    console.error("API Key is missing! Add REACT_APP_API_KEY in .env file.");
}

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(API_KEY);

// Get the model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;
