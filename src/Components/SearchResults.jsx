import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserNavigate from "../Hooks/UserNavigate";
import useTmdbApi from "../Hooks/useTmbdApi";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../Images/loadingSearch.json";
export function SearchResults() {
  const { getSearchMovies } = useTmdbApi();
  const { userNavigate } = UserNavigate();
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loadingSearchMovies, setLoadingSearchMovies] = useState(false);
  const userSearchNavigate = (movieId) => {
    userNavigate(movieId);
  };
  const loadSearchMovies = async () => {
    setLoadingSearchMovies(true);

    if (query) {
      const movies = await getSearchMovies(query);
      setLoadingSearchMovies(false);
      if (movies) {
        setSearchResults(movies);
      }
    }
  };
  useEffect(() => {
    loadSearchMovies();
  }, [query]);
  if (loadingSearchMovies) {
    return (
      <div className="h-[25rem] w-[25rem]">
        <Lottie
          animationData={groovyWalkAnimation}
          loop={true}
          height={500}
          width={500}
        />
      </div>
    );
  }
  return (
    <div className="max-w-6xl">
      {searchResults === []
        ? `no results found for "${query}`
        : `Results for "${query}"`}
      <div className=" pb-10 mt-6 grid  grid-flow-row md:grid-cols-3 md:gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 xl:gap-5 2xl:grid-cols-4 2xl:gap-2 grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 ">
        {searchResults.map((movie) => (
          <div
            onClick={() => userSearchNavigate(movie.id)}
            className="mx-5 mb-10"
          >
            <div className="xl:w-[14rem] xl:h-[25rem] lg:w-[12rem] lg:h-[22rem] md:w-[10rem] md:h-[20rem] sm:w-[9rem] sm:h-[18rem] w-[8.5rem] h-[17rem] rounded-xl top-0 left-0 transition ease-in-out delay-150 bg-gray-100 translate-y-0.5 sm:hover:-translate-y-1 hover:scale-105 border-gray-300 border hover:bg-gray-300 duration-200 ...">
              <img
                className="w-full xl:h-[21rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] h-[13rem] rounded-t-xl"
                src={movie.poster_url}
                alt="movie"
              />
              <div className="  text-white ">
                <div className="flex justify-between py-4">
                  <h1 className="text-black pl-3 md:text-sm text-xs leading-tight w-3/4 ">
                    {movie.name}
                  </h1>

                  <h1 className="text-black text-sm md:text-base pr-3">
                    {movie.rating}
                  </h1>
                </div>
              </div>
              <div
                // onClick={() => props.getFavouriteMovies(movie)}
                className="absolute bg-[#21201E] text-white top-0 opacity-0  transition ease-linear delay-100 hover:opacity-75 text-center sm:text-xl text-sm sm:p-5 p-2 w-full z-20"
              >
                {/* <AddFavourites addfavourite=" Add to Favourite" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
