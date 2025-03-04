import { BG_IMAGE } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import Header from "./Header"; // Assuming you have a Header component

const GptSearch = () => {
    return (
        <div className="relative min-h-screen w-screen overflow-x-hidden bg-black">
            {/* Background Image */}
            <div className="fixed top-0 left-0 w-full h-full ">
                <img
                    alt="bg_image"
                    src={BG_IMAGE}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Fixed Header */}
            <Header />

            {/* Fixed Search Bar */}
            <div className=" top-[60px] z-10 bg-black p-4">
                <GptSearchBar />
            </div>

            {/* Movie Suggestions - Scrollable */}
            <div className="mt-10 p-5 overflow-x-hidden">
                <GptMovieSuggestion />
            </div>
        </div>

    );
};

export default GptSearch;

// const GptSearch = () => {
//     return (
//         <div className="relative min-h-screen w-screen bg-black">
//             {/* Background Image */}
//             <div className="fixed top-0 left-0 w-full h-full -z-10">
//                 <img
//                     alt="bg_image"
//                     src={BG_IMAGE}
//                     className="w-full h-full object-cover"
//                 />
//             </div>

//             {/* Fixed Header */}
//             <Header />

//             {/* Fixed Search Bar */}
//             <div className="sticky top-[60px] z-10 bg-black p-4">
//                 <GptSearchBar />
//             </div>

//             {/* Movie Suggestions - Scrollable */}
//             <div className="mt-10 p-5">
//                 <GptMovieSuggestion />
//             </div>
//         </div>
//     );
// };

// export default GptSearch;

