import * as React from "react";
import { NewReleasedMovies } from "../Components/NewReleasedMovies";
import { UpComingMovies } from "../Components/UpComingMovies";
import { PopularMovies } from "../Components/PopularMovies";

export function Home() {
  return (
    <div className="w-full h-full">
      <NewReleasedMovies />
      <PopularMovies />
      <UpComingMovies />
    </div>
  );
}
