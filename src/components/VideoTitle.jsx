
import { CiCircleInfo } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute  top-0 left-0 w-full h-full flex flex-col justify-center items-start p-8 bg-gradient-to-r ">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">{title}</h1>
            <p className="mb-6 max-w-md break-words text-white text-lg drop-shadow-md">{overview}</p>
            <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-gray-300">
                    <FaPlay /> Play
                </button>
                <button className="bg-gray-600 flex gap-2 justify-center items-center cursor-pointer text-white px-6 py-3 rounded-lg font-semibold">
                    <CiCircleInfo className="text-xl" />  More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;