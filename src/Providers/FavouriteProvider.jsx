import { createContext, useState } from "react";
export const FavouriteContext = createContext(null);

const FavouriteProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);
  const favouriteValue = { favourite, setFavourite };
  return (
    <>
      <FavouriteContext.Provider value={favouriteValue}>
        {children}
      </FavouriteContext.Provider>
    </>
  );
};

export default FavouriteProvider;
