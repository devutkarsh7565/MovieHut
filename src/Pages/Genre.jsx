import * as React from "react";
import { Outlet } from "react-router-dom";
import { GenreResults } from "../Components/GenreResults";
import GenreProvider from "../Providers/GenreProvider";

export function Genre() {
  return (
    <GenreProvider>
      {" "}
      <div className="mt-20">
        <GenreResults />
      </div>
    </GenreProvider>
  );
}
