import { CiCircleInfo } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute  top-1/2 left-0 px-4 md:px-12  md:bg-none transform -translate-y-1/2 w-full lg:max-w-[50%]">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-white drop-shadow-lg">
                {title}
            </h1>
            <p className="mb-4 md:mb-6 text-sm md:text-lg text-white drop-shadow-md max-w-full lg:max-w-md">
                {overview}
            </p>
            <div className="flex gap-2 md:gap-4">
                <button className="flex items-center gap-2 bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold cursor-pointer hover:bg-gray-300">
                    <FaPlay /> Play
                </button>
                <button className="bg-gray-600 flex gap-2 justify-center items-center cursor-pointer text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold">
                    <CiCircleInfo className="text-lg md:text-xl" /> More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
