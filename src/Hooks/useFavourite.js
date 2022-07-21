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

  const getFavouriteMovies = async (movie) => {
    // await addDoc(docRef, {
    // movieId: movie.id,
    // moviePoster: movie.poster_url,
    // movieRating: movie.rating,
    // movieName: movie.name,
    // author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    // });
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
      favList.push(doc.data());
      // console.log(doc.id, " => ", doc.data());
    });
    setFavourite(favList);
  };
  // const updateFavoriteList = [...favourite, doc.data()];
  // setFavourite(doc.data());
  const removeFavouriteMovies = async (movieId) => {
    // const newFavouriteList = favourite.filter((favouritee, id) => id !== index);
    // setFavourite(newFavouriteList);
    // await deleteDoc(
    //   doc(db, "users", auth.currentUser.uid, "favourites", movieId)
    // );
    // console.log("deleted");
  };

  return {
    getFavouriteMovies,
    removeFavouriteMovies,
    setFavourite,
    favourite,
    getFavouriteData,
  };
};

export default useFavourite;
