import {
  getDocs,
  addDoc,
  collection,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useContext } from "react";
import { FavouriteContext } from "../Providers/FavouriteProvider";
import { auth, db } from "./firebase";

const useFavourite = () => {
  const { favourite, setFavourite } = useContext(FavouriteContext);
  // const favouriteCollectionRef = collection(db, "users");

  const addFavouriteMovies = async (movie) => {
    await addDoc(collection(db, "users", auth.currentUser.uid, "favourites"), {
      movieId: movie.id,
      moviePoster: movie.poster_url,
      movieRating: movie.rating,
      movieName: movie.name,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
  };

  const getFavouriteData = async () => {
    let favList = [];
    const querySnapshot = await getDocs(
      collection(db, "users", auth.currentUser.uid, "favourites")
    );
    querySnapshot.forEach((doc) => {
      favList.push({ ...doc.data(), id: doc.id });
      // console.log(doc.id, " => ", doc.data());
    });
    setFavourite(favList);
  };

  const removeFavouriteMovies = async (id) => {
    try {
      await deleteDoc(doc(db, "users", auth.currentUser.uid, "favourites", id));
      // const newFavouriteList = favourite.filter((item) => item !== id);
      // setFavourite(newFavouriteList);
      // console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addFavouriteMovies,
    removeFavouriteMovies,
    setFavourite,
    favourite,
    getFavouriteData,
  };
};

export default useFavourite;
