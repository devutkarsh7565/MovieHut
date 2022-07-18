import { useState, useEffect } from "react";

import useTmdbApi from "../Hooks/useTmbdApi";
import { Link } from "react-router-dom";

export function SimilarMovie({ movie }) {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [similarMoviesLimit, setSimilarMoviesLimit] = useState(4);
  const { getSimilarMovies } = useTmdbApi();
  const slice = similarMovies.slice(0, similarMoviesLimit);

  const loadmoreSimilarMovies = () => {
    setSimilarMoviesLimit(similarMoviesLimit + 4);
  };

  const loadSimilarMovies = async () => {
    console.log(movie);
    const movies = await getSimilarMovies(movie);
    if (movies) {
      console.log(movies);
      setSimilarMovies(movies);
    }
  };

  useEffect(() => {
    loadSimilarMovies();
    console.log("similar movies", movie);
  }, [movie]);
  return (
    <>
      <div className="flex flex-col justify-start ">
        <div className="font-large text-3xl mt-10">
          <h1 className="">Similar Movies</h1>
        </div>
        <div className="flex justify-start flex-wrap mt-6 ">
          {slice?.map((cast) => (
            <Link to={`/movie/${cast.id}`}>
              {" "}
              <div className="mx-5 my-3">
                <div className="md:w-[14rem] md:h-[22rem] w-[7.5rem] h-[9rem] rounded-xl top-0 left-0 transition ease-in-out delay-150 bg-white translate-y-0.5 sm:hover:-translate-y-1 hover:scale-110 border-gray-300 border-2 hover:bg-gray-100 duration-300 ...">
                  <img
                    className="w-full md:h-[18rem] h-[7rem]  rounded-t-xl
                  "
                    src={cast.poster_url}
                    alt="movie"
                  />
                  <div className="flex flex-col md:mt-3 mt-1 ml-2">
                    <h1 className="md:text-lg text-sm font-normal">
                      {cast.name}
                    </h1>
                    <h1 className="md:text-base text-xs font-light pl-1s">
                      {cast.rating}
                    </h1>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="my-5 ml-3 flex justify-end mr-20">
          <button
            className=" py-3 px-4 text-center text-xl font-light bg-black text-gray-200 hover:bg-slate-300 hover:text-black hover:border-2 hover:border-black duration-400 duration-300"
            onClick={loadmoreSimilarMovies}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}
