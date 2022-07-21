import { FormEventHandler, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useTmdbApi from "../Hooks/useTmbdApi";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [nameSuggestion, setNameSuggestion] = useState([]);
  const [nameSuggestionLimit, setNameSuggestionLimit] = useState(2);
  const slice = nameSuggestion.slice(0, nameSuggestionLimit);

  const { getSearchMovies } = useTmdbApi();

  const loadNameSuggestion = async () => {
    const movies = await getSearchMovies(query);

    if (movies) {
      setNameSuggestion(movies);
    }
  };

  useEffect(() => {
    loadNameSuggestion();
  });

  const handleSubmits = () => {
    setNameSuggestion([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${query}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="md:py-2 px-3 py-1 sm:font-medium font-normal  border-slate-200 border-2 outline-none focus:shadow-lg w-32 sm:w-28 md:focus:w-32 lg:focus:w-60 duration-300 focus:border-slate-300 rounded-xl"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {/* <div className="pointer w-60 flex flex-col items-start  border-2 border-slate-200 bg-white">
        {slice?.map((suggest) => (
          <div
            onClick={() => {
              handleSubmits();
              setQuery(suggest.name);

              setNameSuggestion([]);
            }}
            className="pl-3 border-[1px] border-slate-200 w-full"
          >
            {suggest.name}
          </div>
        ))}
      </div> */}
    </>
  );
};

export default SearchBox;
