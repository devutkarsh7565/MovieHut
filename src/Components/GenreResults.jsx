import * as React from "react";
import { useParams } from "react-router-dom";
import GenreList from "./GenreList";

export function GenreResults() {
  const { genre } = useParams();
  return (
    <div>
      <GenreList id={genre} />
    </div>
  );
}
