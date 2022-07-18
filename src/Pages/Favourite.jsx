import { Link } from "react-router-dom";
import { useEffect } from "react";
import useFavourite from "../Hooks/useFavourite";
import { useNavigate } from "react-router-dom";
import RemoveFavourites from "../Components/RemoveFavourties";
const Favourite = () => {
  const navigate = useNavigate();
  const navigateMovieDetail = (id) => {
    navigate(`/movie/${id}`);
  };
  const { favourite, removeFavouriteMovies, getFavouriteData } = useFavourite();
  useEffect(() => {
    getFavouriteData();
  });

  return (
    <>
      <div className="pt-28 pb-10 grid w-screen grid-flow-row md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-5 2xl:gap-5 grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 ">
        {favourite?.map((movie, index) => (
          <div
            onClick={() => navigateMovieDetail(movie.movieId)}
            className="mx-5 my-5"
          >
            <div className="w-full h-[555px] rounded-xl top-0 left-0 transition ease-in-out delay-150 bg-[#1F4690] translate-y-0.5 sm:hover:-translate-y-1 hover:scale-110 border-gray-300 border-2 hover:bg-[#293462] duration-300 ...">
              <img
                className="w-full h-[450px] rounded-t-xl"
                src={movie.moviePoster}
                alt="movie"
              />
              <div className="flex flex-col justify-around  text-white mb-5">
                <div className="flex justify-between pt-4">
                  <h1 className="text-white pl-3 text-sm leading-tight ">
                    {movie.movieName}
                  </h1>

                  <h1 className="text-white pr-3">{movie.movieRating}</h1>
                </div>
              </div>
              <div
                onClick={() => removeFavouriteMovies(index)}
                className="absolute bg-[#21201E] top-0 opacity-0  transition ease-linear delay-100 hover:opacity-75 text-center sm:text-xl text-sm sm:p-5 p-2 w-full z-20"
              >
                <RemoveFavourites />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourite;
