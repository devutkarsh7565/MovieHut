import { useParams } from "react-router-dom";
import useGenre from "../Hooks/useGenre";
import Button from "./Button";
import { Link } from "react-router-dom";
import GenreMovies from "./GenreMovies";

const GenreList = ({ id }) => {
  const { genres } = useGenre();

  return (
    <>
      <div className="pt-5 flex justify-start px-5  flex-wrap">
        {genres.map((genre) => (
          <Button
            genreid={id || ""}
            genreId={genre.id}
            genreName={genre.name}
          />
        ))}
      </div>
      <GenreMovies />
    </>
  );
};

export default GenreList;
