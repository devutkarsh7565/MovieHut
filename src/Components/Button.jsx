import { useState } from "react";
import { GenreContext } from "../Providers/GenreProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { setGenre } = useContext(GenreContext);

  //   const [genreColor, setGenreColor] = useState("#FFA500");
  const handleColor = () => {
    if (props.genreid === props.genreName) {
      return "#47B5FF";
    } else {
      return "#FFA500";
    }
  };
  return (
    <>
      <Link to={`/genre/${props.genreName}`}>
        <button
          onClick={() => {
            setGenre(props.genreId);
            //   setGenreColor("#47B5FF");
            // props.setSearchMovie([]);
          }}
          style={{ backgroundColor: handleColor() }}
          className=" md:text-base text-sm px-3 border-2 border-white rounded-xl py-2 md:px-5 text-black  md:mr-8 mr-3 hover:text-black top-0 left-0 transition ease-in-out delay-150 translate-y-0.5 sm:hover:-translate-x-1 hover:scale-110  duration-300 ... md:mb-8 mb-3  "
        >
          {props.genreName}
        </button>
      </Link>
    </>
  );
};

export default Button;
