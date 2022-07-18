import { useEffect, useState } from "react";
import useTmdbApi from "../Hooks/useTmbdApi";
import { Link } from "react-router-dom";

const CastRelatedMovies = ({ cast }) => {
  const [castRelatedMovies, setCastRelatedMovies] = useState([]);
  const [relatedMoviesLimit, setRelatedMoviesLimit] = useState(4);
  const { getCastRelatedMovies } = useTmdbApi();
  const slice = castRelatedMovies.slice(0, relatedMoviesLimit);

  const loadCastRelatedMovies = async () => {
    const movies = await getCastRelatedMovies(cast);
    if (movies) {
      setCastRelatedMovies(movies);
    }
  };

  const loadMoreRelatedMovies = () => {
    setRelatedMoviesLimit(relatedMoviesLimit + 4);
  };

  useEffect(() => {
    loadCastRelatedMovies();
  }, [cast]);
  return (
    <>
      <div className="flex flex-col justify-start ">
        <div className="font-large text-3xl mt-5">
          <h1 className="text-2xl font-normal mb-3">Known For</h1>
        </div>
        <div className="flex justify-start flex-wrap  ">
          {slice?.map((cast) => (
            <Link to={`/movie/${cast.id}`}>
              {" "}
              <div className="mx-1 md:mx-1 my-3">
                <div className="md:w-[180px] md:h-[260px] w-[120px] h-[150px] rounded-xl top-0 left-0 transition ease-in-out delay-150 bg-white translate-y-0.5 sm:hover:-translate-y-1 hover:scale-110 border-gray-300 border-2 hover:bg-gray-100 duration-300 ...">
                  <img
                    className="w-full md:h-[260px] h-[150px] rounded-t-xl
                  "
                    src={cast.poster_url}
                    alt="movie"
                  />
                </div>
                <div className="flex flex-col mt-3 ml-1 md:ml-2 md:w-[180px] w-[120px] ">
                  <h1 className="md:text-lg text-sm  font-light hover:text-blue-600">
                    {cast.name}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="my-5 ml-3 flex justify-end mr-20">
          <button
            className=" py-3 px-4 text-center text-xl font-light bg-black text-gray-200 hover:bg-slate-300 hover:text-black hover:border-2 hover:border-black duration-400 "
            onClick={loadMoreRelatedMovies}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default CastRelatedMovies;
