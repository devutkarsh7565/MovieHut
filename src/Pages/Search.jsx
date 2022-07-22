import * as React from "react";
import { Outlet, useOutlet } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../Images/searchlottie.json";

export function Search() {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  const outlet = useOutlet();
  if (outlet)
    return (
      <div className="w-full h-full flex justify-center mt-20">
        <Outlet />
      </div>
    );
  return (
    <>
      <div className="flex flex-col justify-start items-center mt-20 min-h-screen">
        <div className="mt-10">
          <p className="text-[#413F42] sm:text-3xl text-2xl font-Raleways font-medium ">
            Search above to get results
          </p>
        </div>
        <div className="sm:h-[25rem] sm:w-[25rem] w-[18rem] h-[18rem] flex  ">
          <Lottie
            animationData={animationData}
            loop={true}
            height={600}
            width={600}
          />
        </div>
      </div>
    </>
  );
}
