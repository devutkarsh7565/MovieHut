import { useContext, useEffect, useState } from "react";
import UserNavigate from "../Hooks/UserNavigate";
import { GenreContext } from "../Providers/GenreProvider";
import useTmdbApi from "../Hooks/useTmbdApi";
import { Link, useNavigate, useParams } from "react-router-dom";
const GenreMovies = () => {
  const { genre } = useContext(GenreContext);
  const [genreMovies, setGenreMovies] = useState([]);
  const navigate = useNavigate();
  const { getGenreMovies } = useTmdbApi();
  const { userNavigate } = UserNavigate();
  const userGenreNavigate = (movieId) => {
    userNavigate(movieId);
  };
  const loadGenreMovies = async () => {
    const movies = await getGenreMovies(genre || "");
    if (movies) {
      setGenreMovies(movies);
    }
  };

  useEffect(() => {
    loadGenreMovies();
  }, [genre]);

  const handleRatingColor = (rating) => {
    if (rating > 8) {
      return "#3CCF4E";
    } else if (rating >= 7) {
      return "#519259";
    } else if (rating >= 5) {
      return "#EF5B0C";
    }
  };
  return (
    <>
      <div className=" pb-10   my-4  grid  grid-flow-row md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-4 2xl:gap-4 grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 ">
        {genreMovies.map((movie) => (
          <div
            onClick={(e) => {
              e.preventDefault();

              userGenreNavigate(movie.id);
            }}
            className="lg:mx-5 md:mx-4  mb-10 flex justify-center"
          >
            <div className=" xl:w-[14rem] xl:h-[25rem] lg:w-[12rem] lg:h-[22rem] md:w-[11rem] md:h-[21rem]  sm:w-[10rem] sm:h-[18rem] w-[9rem] h-[17rem] rounded-xl  transition ease-in-out delay-150 bg-gray-100 translate-y-0.5 sm:hover:-translate-y-1 hover:scale-105 border-gray-500 border-2 hover:bg-gray-200 duration-200">
              <img
                className="w-full xl:h-[21rem] lg:h-[19rem] md:h-[18rem] sm:h-[15rem] h-[12.5rem] rounded-t-xl"
                src={movie.poster_url}
                alt="movie"
              />
              <div className=" text-white">
                <div className="flex justify-between my-3 ">
                  <h1 className="text-black pl-3 text-sm leading-tight  w-3/4">
                    {movie.name}
                  </h1>

                  <h1
                    style={{ color: handleRatingColor(movie.rating) }}
                    className="text-black pr-3"
                  >
                    {movie.rating}
                  </h1>
                </div>
              </div>
              {/* <div
                  onClick={() => props.getFavouriteMovies(movie)}
                  className="absolute bg-[#21201E] text-white top-0 opacity-0  transition ease-linear delay-100 hover:opacity-75 text-center sm:text-xl text-sm sm:p-5 p-2 w-full z-20"
                >
                  <AddFavourites addfavourite=" Add to Favourite" />
                </div> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenreMovies;
