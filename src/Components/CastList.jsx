import { useEffect, useState } from "react";

import useTmdbApi from "../Hooks/useTmbdApi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

export function CastList({ movie }) {
  const { getCastList } = useTmdbApi();
  const [castList, setCastList] = useState([]);

  const loadCastList = async () => {
    const movies = await getCastList(movie);
    if (movies) {
      setCastList(movies);
    }
  };
  useEffect(() => {
    loadCastList();
  }, [movie]);

  return (
    <>
      <div className="flex flex-col justify-start ">
        <div className="font-large text-3xl mt-10 ">
          <h1 className="mx-3">Top Billed Cast</h1>
        </div>
        <div className="relative flex items-center mt-6 ">
          <MdChevronLeft size={40} />
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth pt-2 "
          >
            {castList.map((cast) => (
              <>
                <Link to={`/castdetail/${cast.id}`}>
                  <div className="md:w-[220px] md:h-[370px] w-[130px] h-[15rempx]  inline-block border border-black  cursor-pointer hover:scale-105 ease-in-out duration-300 bg-white mr-4 mb-4 shadow-xl">
                    {" "}
                    <img
                      className="md:w-[220px] md:h-[295px] w-[130px] h-[165px]  inline-block 
                  "
                      src={cast.profile_path}
                      alt="movie"
                    />
                    <div className="md:mb-2 md:mt-3 md:my-1 ">
                      <h1 className="ml-3 mt-1 md:text-lg text-sm font-normal w-4/5">
                        {cast.name}
                      </h1>{" "}
                      <h1 className="md:ml-4 md:text-base ml-2 text-xs font-light w-4/5  ">
                        {cast.character}
                      </h1>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>

          <MdChevronRight size={40} className="md:mr-5 mr-2" />
        </div>
        {/* <SimilarMovie
          similarMovie={props.similarMovie}
          limit={props.limit}
          setLimit={props.setLimit}
          loadMore={props.loadMore}
        /> */}
      </div>
    </>
  );
}
