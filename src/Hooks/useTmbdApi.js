import axios from "axios";

const tmbd_api_endpoint = "https://api.themoviedb.org/3";
const api_key = process.env.REACT_APP_API_KEY;
const tmdb_img_url = "https://image.tmdb.org/t/p/w500";

const getNewReleasedMovies = async () => {
  try {
    const response = await axios.get(`${tmbd_api_endpoint}/movie/now_playing`, {
      params: { page: 1, api_key, language: "en-US" },
    });
    if (response.status === 200) {
      if (response.data) {
        return response.data.results.map((movie) => {
          return {
            id: movie.id,
            name: movie.original_title,
            rating: movie.vote_average,
            poster_url: tmdb_img_url + movie.poster_path,
          };
        });
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in getting new release movie :", err);
    return null;
  }
};

const getUpComingMovies = async () => {
  try {
    const response = await axios.get(`${tmbd_api_endpoint}/movie/upcoming`, {
      params: { page: 1, api_key, language: "en-US" },
    });
    if (response.status === 200) {
      if (response.data) {
        return response.data.results.map((movie) => {
          return {
            id: movie.id,
            name: movie.original_title,
            rating: movie.vote_average,
            poster_url: tmdb_img_url + movie.poster_path,
          };
        });
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in getting new upcoming movies :", err);
  }
};

const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${tmbd_api_endpoint}/discover/movie?sort_by=popularity.desc`,
      {
        params: { api_key },
      }
    );

    if (response.status === 200) {
      if (response.data) {
        return response.data.results.map((movie) => {
          return {
            id: movie.id,
            name: movie.original_title,
            rating: movie.vote_average,
            poster_url: tmdb_img_url + movie.poster_path,
          };
        });
      } else {
        return null;
      }
    }
    return null;
  } catch (err) {
    console.log("error in getting popular movies :", err);
  }
};

const getSearchMovies = async (query) => {
  try {
    const response = await axios.get(`${tmbd_api_endpoint}/search/movie`, {
      params: {
        query,
        api_key,
        language: "en-US",
        page: 1,
        include_adult: false,
      },
    });
    if (response.status === 200) {
      if (response.data) {
        return response.data.results.map((movie) => {
          return {
            id: movie.id,
            name: movie.original_title,
            rating: movie.vote_average,
            poster_url: tmdb_img_url + movie.poster_path,
          };
        });
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in getting search movies :", err);
  }
};

const getMovieDetail = async (movie) => {
  try {
    const response = await axios.get(`${tmbd_api_endpoint}/movie/${movie}`, {
      params: {
        api_key,
        language: "en-US",
      },
    });
    if (response.status === 200) {
      if (response.data) {
        const movieDetailData = {
          name: response.data.original_title,
          rating: response.data.vote_average,
          id: response.data.id,
          poster_url: tmdb_img_url + response.data.poster_path,
          release_date: response.data.release_date,
          status: response.data.status,
          runtime: response.data.runtime,
          overview: response.data.overview,
          genre: response.data.genres,
          revenue: response.data.revenue,
          languages: response.data.spoken_languages,
        };
        return movieDetailData;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in getting  movies information :", err);
  }
};

const getCastList = async (movie) => {
  try {
    const response = await axios.get(
      `${tmbd_api_endpoint}/movie/${movie}/credits`,
      {
        params: {
          api_key,
          language: "en-US",
        },
      }
    );
    if (response.status === 200) {
      if (response.data) {
        return response.data.cast.map((movie) => {
          return {
            id: movie.id,
            name: movie.name,
            character: movie.character,
            profile_path: tmdb_img_url + movie.profile_path,
          };
        });
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in getting cast list :", err);
  }
};

const getSimilarMovies = async (movie) => {
  try {
    const response = await axios.get(
      `${tmbd_api_endpoint}/movie/${movie}/recommendations`,
      {
        params: {
          api_key,
          language: "en-US",
          page: 1,
        },
      }
    );
    if (response.status === 200) {
      if (response.data) {
        return response.data.results.map((movie) => {
          return {
            poster_url: tmdb_img_url + movie.poster_path,
            name: movie.title,
            id: movie.id,
            rating: movie.vote_average,
          };
        });
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in getting Similar movies :", err);
  }
};

const getCastDetail = async (cast) => {
  try {
    const response = await axios.get(`${tmbd_api_endpoint}/person/${cast}`, {
      params: {
        api_key,
        language: "en-US",
        page: 1,
      },
    });
    if (response.status === 200) {
      if (response.data) {
        const movieDetailData = {
          profile_path: tmdb_img_url + response.data.profile_path,
          known_for_department: response.data.known_for_department,
          place_of_birth: response.data.place_of_birth,
          birthday: response.data.birthday,
          biography: response.data.biography,
          gender: response.data.gender,
          name: response.data.name,
          id: response.data.id,
        };
        return movieDetailData;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in getting cast detail information :", err);
  }
};

const getCastRelatedMovies = async (cast) => {
  try {
    const response = await axios.get(
      `${tmbd_api_endpoint}/person/${cast}/movie_credits`,
      {
        params: {
          api_key,
          language: "en-US",
          page: 1,
        },
      }
    );
    if (response.status === 200) {
      if (response.data) {
        return response.data.cast.map((movie) => {
          return {
            poster_url: tmdb_img_url + movie.poster_path,
            name: movie.title,
            id: movie.id,
            rating: movie.vote_average,
          };
        });
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in getting cast related movies information :", err);
  }
};

const getGenreMovies = async (genre) => {
  try {
    const response = await axios.get(`${tmbd_api_endpoint}/discover/movie`, {
      params: {
        api_key,
        with_genres: genre,
      },
    });
    if (response.status === 200) {
      if (response.data) {
        return response.data.results.map((movie) => {
          return {
            poster_url: tmdb_img_url + movie.poster_path,
            name: movie.title,
            id: movie.id,
            rating: movie.vote_average,
          };
        });
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (err) {
    console.log("error in getting genre movies lists :", err);
  }
};

const useTmdbApi = () => {
  return {
    getNewReleasedMovies,
    getUpComingMovies,
    getPopularMovies,
    getSearchMovies,
    getMovieDetail,
    getCastList,
    getSimilarMovies,
    getCastDetail,
    getCastRelatedMovies,
    getGenreMovies,
  };
};

export default useTmdbApi;
