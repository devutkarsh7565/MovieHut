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

              <img
                className="w-full md:h-[17rem] h-[14rem] "
                src={movie.moviePoster}
                alt="movie"
              />
              <div className="flex justify-between md:h-[4.5rem] w-full h-[4rem] items-center">
                <h1 className=" pl-3 md:text-sm text-xs leading-tight ">
                  {movie.movieName}
                </h1>

                <h1 className=" pr-3 md:text-base text-sm">
                  {movie.movieRating}
                </h1>
              </div>
              <div
                onClick={() => navigateMovieDetail(movie.movieId)}
                className="flex justify-center md:h-[1.5rem] h-[2rem] items-center bg-[#FFA500]  mx-2  text-[#1F4690] px-2  leading-tight   "
              >
                <h1 className="text-xs">click here to know more</h1>
              </div>
              <div
                onClick={() => removeFavouriteMovies(movie.id)}
                className="absolute bg-[#21201E] top-0 opacity-0  transition ease-linear delay-100 hover:opacity-75 text-center sm:text-base text-sm sm:p-3 p-2 w-full z-20"
              >
                <RemoveFavourites />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favourite;
