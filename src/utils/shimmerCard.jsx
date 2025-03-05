const ShimmerCard = () => (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        {/* Image Shimmer Effect */}
        <div className="w-full h-56 bg-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer"></div>
        </div>

        <div className="p-3">
            {/* Title Shimmer Effect */}
            <div className="h-4 bg-gray-600 w-3/4 rounded mb-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 animate-shimmer"></div>
            </div>
            {/* Subtitle Shimmer Effect */}
            <div className="h-3 bg-gray-600 w-1/2 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 animate-shimmer"></div>
            </div>
        </div>
    </div>
);

export default ShimmerCard;
