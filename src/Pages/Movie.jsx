import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFavourite from "../Hooks/useFavourite";
import useTmdbApi from "../Hooks/useTmbdApi";
import { MdFavorite } from "react-icons/md";
import { CastList } from "../Components/CastList";
import { SimilarMovie } from "../Components/SimilarMovies";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../Images/loading.json";

export function Movie() {
  const { getFavouriteMovies } = useFavourite();

  const { movie } = useParams();
  const [movieDetail, setMovieDetail] = useState();
  const [loadingMovieDetail, setLoadingMovieDetail] = useState(false);
  const { getMovieDetail } = useTmdbApi();

  const [color, setColor] = useState("blue");
  const favouritee = () => {
    getFavouriteMovies(movieDetail);
  };

  const userScore = movieDetail?.rating * 10 + 3;
  const loadMovieDetail = async () => {
    setLoadingMovieDetail(true);
    if (movie) {
      const movies = await getMovieDetail(movie);
      setLoadingMovieDetail(false);
      if (movies) {
        setMovieDetail(movies);
      }
    }
  };
  useEffect(() => {
    loadMovieDetail();
  }, [movie]);

  if (loadingMovieDetail) {
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
    <>
      <div className=" w-full min-h-screen xl:mt-20 ">
        <div className="w-full min-h-screen   ">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-1">
              <div className="w-120  flex md:flex-col items-center justify-center  col-span-2 md:col-span-1 md:row-span-3 row-span-2 md:pt-0 pt-10 ">
                <img
                  className="xl:w-[350px] xl:h-[520px] lg:w-[260px] lg:h-[365px] md:w-[250px] md:h-[355px] sm:w-[220px] sm:h-[300px] w-[220px] h-[310px] rounded-t-xl shadow-xl mb-5"
                  src={movieDetail?.poster_url}
                  alt="poster"
                />
              </div>
              <div className="w-120 h-[605px] flex flex-col items-center justify-center col-span-2 row-span-3">
                <h1 className="md:pt-16 lg:pt-0 sm:pl-3 pl-2 font-bold xl:text-3xl md:text-2xl sm:text-xl ">
                  {movieDetail?.name} {movieDetail?.rating}
                  <span className="font-light pl-2 ">
                    ({movieDetail?.release_date})
                  </span>
                </h1>
                <div className=" flex justify-start items-center flex-wrap py-2 mx-2 ">
                  <div
                    className="w-16 h-8 flex justify-center items-center
               rounded-md border-2 text-sm font-light hover:border-blue-500 border-black"
                  >
                    <h1
                      className="hover:text-lg
                 transition ease-in-out delay-150 "
                    >
                      13+
                    </h1>
                  </div>
                  <div className="pl-2">
                    <h1 className="font-light xl:text-xl lg:text-lg md:text-base">
                      {movieDetail?.status}{" "}
                      <span className="font-light">
                        (IN) <span className="text-xl font-semibold  ">.</span>
                      </span>
                    </h1>
                  </div>
                  <div className="flex justify-start">
                    {movieDetail?.genre?.map((item) => (
                      <h1 className="font-light xl:text-xl text-base ">
                        {item.name},
                      </h1>
                    ))}
                  </div>

                  <div>
                    <h1 className=" font-light xl:text-lg text-base">
                      <span className="pl-1 pr-1 text-xl  font-bold">.</span>
                      {movieDetail?.runtime} min
                    </h1>
                  </div>
                </div>
                <div className="flex justify-start items-center pt-4">
                  <div className="h-20 w-20 rounded-full bg-black flex justify-center items-center border-4 border-yellow-400 text-white ">
                    {userScore}
                    <span className="text-center">%</span>
                  </div>
                  <div className=" flex flex-col justify-center pl-3 text-lg font-light pr-3">
                    <div>User</div>
                    <div>Score</div>
                  </div>

                  <div className="flex justify-start">
                    <h1
                      onClick={() => {
                        setColor("#FFA500");
                        favouritee();
                      }}
                      style={{ backgroundColor: color }}
                      className="w-14 h-14 rounded-full bg-blue-900 flex justify-center items-center top-0 left-0 transition ease-in-out delay-150 translate-y-0.5 sm:hover:translate-x hover:scale-110 hover:bg-[#47B5FF] duration-300 ... "
                    >
                      <MdFavorite className=" rounded-full" />
                    </h1>
                  </div>
                </div>
                <div className=" pt-3 mx-4">
                  <h1 className="font-bold text-xl">
                    Overview:{" "}
                    <span className="font-normal md:text-lg sm:text-base text-sm ">
                      {movieDetail?.overview}
                    </span>
                  </h1>
                  <div className="flex justify-start mt-1">
                    <h1 className="font-medium md:text-xl text-lg mr-2">
                      Languages:{" "}
                    </h1>
                    {movieDetail?.languages?.map((item) => (
                      <h1 className="font-light md:font-medium text-sm md:text-base mr-2 pt-1">
                        {item.english_name}{" "}
                      </h1>
                    ))}
                  </div>
                  <div className="font-normal text-base mt-1 ">
                    <h1>
                      <span className="font-medium  md:text-xl text-lg ">
                        {" "}
                        Box Office Collection:{" "}
                      </span>
                      ${movieDetail?.revenue}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <CastList movie={movie || ""} />
            <SimilarMovie movie={movie || ""} />
          </div>
        </div>
      </div>
    </>
  );
}
