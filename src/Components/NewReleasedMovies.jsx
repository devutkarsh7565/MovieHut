import { useEffect, useState } from "react";
import useTmdbApi from "../Hooks/useTmbdApi";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../Images/loading.json";
import UserNavigate from "../Hooks/UserNavigate";

export function NewReleasedMovies() {
  const [releasedMovieCards, setReleasedMovieCards] = useState([]);
  const { getNewReleasedMovies } = useTmdbApi();
  const [loading, setLoading] = useState(false);
  const { userNavigate } = UserNavigate();

  const userReleasednavigate = (movieId) => {
    userNavigate(movieId);
  };

  const loadReleasedMovies = async () => {
    setLoading(true);
    const movies = await getNewReleasedMovies();
    setLoading(false);

    if (movies) {
      setReleasedMovieCards(movies);
    }
  };

  useEffect(() => {
    loadReleasedMovies();
    console.log("useEffect called");
  }, []);

  if (loading)
    return (
      <div className="sm:h-[25rem] sm:w-[25rem]  flex justify-center ">
        <Lottie
          animationData={groovyWalkAnimation}
          loop={true}
          height={500}
          width={500}
        />
      </div>
    );
  return (
    <>
      <div className="w-full flex flex-col h-[30rem] justify-start  p-4">
        <h1 className=" font-poppins text-3xl py-2">New Realeased Movies</h1>{" "}
        <div
          id="slider"
          className="theatre-scroll max-w-6xl h-[23rem] overflow-x-scroll scroll-smooth py-5  flex justify-start items-center"
        >
          {releasedMovieCards?.map((movie) => (
            <>
              <div
                onClick={() => userReleasednavigate(movie.id)}
                className="md:w-[11rem] md:h-[19rem]  sm:w-[9rem] sm:h-[17rem]  w-[7rem] h-[13rem] mx-4 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 shadow-lg flex flex-col items-start justify-start"
              >
                <img
                  className="md:w-[11rem] md:h-[15rem] sm:w-[9rem] sm:h-[13rem]  w-[7rem] h-[9rem] rounded-t-xl"
                  src={movie.poster_url}
                  alt="movie"
                />
                <div className="w-full h-full flex justify-between items-center p-2 bg-[#F6F6F6] rounded-b-lg">
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
