const MovieModal = ({ movie, onClose }:any) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-6 w-full md:max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Close
            </button>
          </div>
          <div className="flex">
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className="w-1/3 rounded-lg mr-4" />
            <div className="w-2/3">
              <p className="text-gray-700 mb-2">{movie.overview}</p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Release Date:</span> {movie.release_date}
              </p>
              {/* Display cast list */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MovieModal;
  