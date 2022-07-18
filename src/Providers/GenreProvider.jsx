import { createContext, useState } from "react";

export const GenreContext = createContext(null);
const GenreProvider = ({ children }) => {
  const [genre, setGenre] = useState();

  const contextValue = {
    genre,
    setGenre,
  };
  return (
    <>
      <GenreContext.Provider value={contextValue}>
        {children}
      </GenreContext.Provider>
    </>
  );
};

export default GenreProvider;
