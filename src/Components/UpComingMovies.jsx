import { useEffect, useState } from "react";
import useTmdbApi from "../Hooks/useTmbdApi";
import UserNavigate from "../Hooks/UserNavigate";
export function UpComingMovies() {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [loadingUpComingMovies, setLoadingUpComingMovies] = useState(false);
  const { getUpComingMovies } = useTmdbApi();
  const { userNavigate } = UserNavigate();
  const loadUpComingMovies = async () => {
    setLoadingUpComingMovies(true);
    const movies = await getUpComingMovies();
    setLoadingUpComingMovies(false);

    if (movies) {
      setUpComingMovies(movies);
    }
  };

  const userUpcomingNavigate = (movieId) => {
    userNavigate(movieId);
  };

  useEffect(() => {
    loadUpComingMovies();
  }, []);

  const handleRatingColor = (rating) => {
    if (rating > 8) {
      return "#3CCF4E";
    } else if (rating >= 7) {
      return "#17D7A0";
    } else if (rating >= 5) {
      return "#EF5B0C";
    }
  };
  return (
    <>
      <div className="w-full flex flex-col h-[24rem] md:h-[25rem] sm:h-[24rem] justify-start mt-5 ">
        <h1 className=" font-poppins md:text-3xl text-2xl mx-2 my-2 py-2">
          Upcoming Movies
        </h1>{" "}
        <div
          id="slider"
          className="theatre-scroll max-w-6xl h-[21rem] sm:h-[23rem] overflow-x-scroll scroll-smooth   flex justify-start items-start"
        >
          {upComingMovies?.map((movie) => (
            <>
              <div
                onClick={() => userUpcomingNavigate(movie.id)}
                className="md:w-[11rem] md:h-[19rem]  sm:w-[9rem] sm:h-[17rem]  w-[9rem] h-[17.6rem] ml-4  cursor-pointer   flex flex-col items-start justify-start"
              >
                <div className="shadow-lg shadow-gray-400 ">
                  <img
                    className="md:w-[11rem] md:h-[15rem] sm:w-[9rem] sm:h-[13rem]  w-[9rem] h-[13.8rem] "
                    src={movie.poster_url}
                    alt="movie"
                  />
                </div>
                <div className="w-full h-full flex justify-between items-center mt-2 p-2 ">
                  <p className="text-sm font-normal w-[40rem] whitespace-pre-wrap leading-tight">
                    {movie.name}
                  </p>
                  <span className="mx-2" />
                  <h1
                    style={{ color: handleRatingColor(movie.rating) }}
                    className="md:text-base  text-xs font-medium w-4/5 "
                  >
                    {movie.rating}
                  </h1>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
