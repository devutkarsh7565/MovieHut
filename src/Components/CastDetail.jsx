import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../Images/loading.json";
import useTmdbApi from "../Hooks/useTmbdApi";
import CastRelatedMovies from "./CastRelatedMovies";

const CastDetail = () => {
  const { cast } = useParams();
  const [castDetail, setCastDetail] = useState();
  const [loadingCastDetail, setLoadingCastDetail] = useState(false);

  let gender;
  if (castDetail?.gender === 2) {
    gender = "male";
  } else {
    gender = "female";
  }

  const { getCastDetail } = useTmdbApi();
  const loadCastDetail = async () => {
    setLoadingCastDetail(true);
    const movies = await getCastDetail(cast || "");
    setLoadingCastDetail(false);
    if (movies) {
      setCastDetail(movies);
    }
  };

  useEffect(() => {
    loadCastDetail();
  }, [cast]);

  if (loadingCastDetail) {
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
      <div className=" mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-1 mx-5 py-8">
        <div className="w-120 md:h-[840px]  flex md:flex-col  justify-between  col-span-2 md:col-span-1 md:row-span-3 row-span-2  ">
          <img
            className="  lg:w-[240px] lg:h-[355px] md:w-[250px] md:h-[370px] sm:w-[220px] sm:h-[300px] w-[180px] h-[210px] rounded-t-xl shadow-xl md:mt-8  "
            src={castDetail?.profile_path}
            alt="img"
          />
          <div className="w-full flex flex-col items-start  sm:ml-8 ml-3 ">
            <h1 className=" ml:6 pl:2 md:mt-10 md:text-2xl  text-xl ">
              Personal Info
            </h1>
            <h1 className="  ml:6 pl:2 mt-4 md:text-xl  text-lg">Known for</h1>
            <h1 className=" ml:6 pl:2  md:text-lg  text-base font-light">
              {castDetail?.known_for_department}
            </h1>
            <h1 className=" ml:6 pl:2 mt-4 md:text-xl  text-lg">Birthdate</h1>
            <h1 className=" ml:6 pl:2  md:text-lg  text-base font-light">
              {castDetail?.birthday}
            </h1>
            <h1 className=" ml:6 pl:2 mt-4 md:text-xl  text-lg">Birth place</h1>
            <h1 className=" ml:6 pl:2 md:text-lg  text-base font-light w-10">
              {castDetail?.place_of_birth}
            </h1>
            <h1 className=" ml:6 pl:2 mt-4 md:text-xl  text-lg">Gender</h1>
            <h1 className=" ml:6 pl:2 md:text-lg  text-base font-light">
              {gender}
            </h1>
          </div>
        </div>
        <div className="w-120  flex flex-col items-start my-5 mx-5 xl:mr-4  col-span-2 row-span-3 lg:col-span-3">
          <h1 className="text-4xl font-bold mb-5">{castDetail?.name}</h1>
          <h1 className="text-2xl font-normal mb-3">Biography</h1>
          <h1>{castDetail?.biography}</h1>
          <CastRelatedMovies cast={cast || ""} />
        </div>
      </div>
    </>
  );
};

export default CastDetail;
