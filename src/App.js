import { Route, Routes } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";
import CastDetail from "./Components/CastDetail";
import { GenreResults } from "./Components/GenreResults";
import { LayoutWrapper } from "./Components/LayoutWrapper";
import { SearchResults } from "./Components/SearchResults";
import { Genre } from "./Pages/Genre";
import { Home } from "./Pages/Home";
import { Movie } from "./Pages/Movie";
import { Search } from "./Pages/Search";
import Login from "./Pages/Login";
import Favourite from "./Pages/Favourite";

const App = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
          {!isAuth && <Route path="/login" element={<Login />} />}
          <Route path="/search" element={<Search />}>
            <Route path=":query" element={<SearchResults />} />
          </Route>
          <Route path="/genre" element={<Genre />}>
            <Route path=":genre" element={<GenreResults />} />
          </Route>
          <Route path="/movie/:movie" element={<Movie />} />
          <Route path="/castdetail/:cast" element={<CastDetail />} />
          <Route path="/favourite" element={<Favourite />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
