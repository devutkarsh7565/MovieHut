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

  return (
    <>
      <div className="w-full flex flex-col h-[30rem] justify-start p-4">
        <h1 className="w-full font-poppins text-3xl">UpComing Movies</h1>{" "}
        <div
          id="slider"
          className="theatre-scroll w-full max-w-6xl h-[23rem] overflow-x-scroll scroll-smooth pt-2 flex justify-start items-center"
        >
          {upComingMovies?.map((movie) => (
            <>
              <div
                onClick={() => userUpcomingNavigate(movie.id)}
                className="md:w-[11rem] md:h-[19rem]  sm:w-[9rem] sm:h-[17rem]  w-[7rem] h-[13rem] mx-4 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 shadow-lg flex flex-col items-start justify-start"
              >
                <img
                  className="md:w-[11rem] md:h-[15rem] sm:w-[9rem] sm:h-[13rem]  w-[7rem] h-[9rem] rounded-t-xl"
                  src={movie.poster_url}
                  alt="movie"
                />
                <div className="w-full h-full flex justify-between items-center p-2">
                  <p className="text-sm font-normal w-[40rem] whitespace-pre-wrap leading-tight">
                    {movie.name}
                  </p>
                  <span className="mx-2" />
                  <h1 className="md:text-base text-xs font-light w-4/5 ">
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
