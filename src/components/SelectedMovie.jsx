import { useSelector } from "react-redux";
import Header from "./Header";
import { IMG_CDN_URL } from "../utils/constants";

const SelectedMovie = () => {
    const movie = useSelector(state => state.movies?.SelectedMovie);

    if (!movie) return <div>Loading...</div>;  // Ensure the component renders something

    const {
        original_title, overview, release_date, vote_average, vote_count,
        popularity, backdrop_path, poster_path, original_language, id, video, adult
    } = movie;

    return (
        <div className="bg-[#1A2332] text-white min-h-screen">
            <Header />

            
            <div className="p-6 flex  h-screen justify-center  items-center ">
                <div className="flex gap-6 bg-gray-900 p-6 rounded-lg shadow-lg  flex-col md:flex-row items-center  w-[90%] max-w-4xl">
                    {/* Movie Poster */}
                    <img
                        src={IMG_CDN_URL + poster_path}
                        alt={original_title}
                        className="w-48 rounded-lg shadow-lg"
                    />

                    {/* Movie Information */}
                    <div>
                        <h2 className="text-3xl font-bold">{original_title} ({original_language.toUpperCase()})</h2>
                        <p className="text-gray-300 mt-2">{overview}</p>
                        <p className="mt-3"><strong>Release Date:</strong> {release_date}</p>
                        <p><strong>Rating:</strong> ⭐ {vote_average} ({vote_count} votes)</p>
                        <p><strong>Popularity:</strong> {popularity >= 1000 ? (popularity / 1000).toFixed(1) + "K" : popularity}</p>
                        {/* <p><strong>Movie ID:</strong> {id}</p> */}
                        <p><strong>Adult:</strong> {adult ? "No" : "Yes"}</p>
                        {/* <p><strong>Video Available:</strong> {video ? "Yes" : "No"}</p> */}
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default SelectedMovie;
