import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
const UserNavigate = () => {
  const navigate = useNavigate();
  const { auths } = useAuth();
  const userNavigate = (movieId) => {
    if (!auths.isAuth) {
      navigate("/login");
    } else {
      navigate(`/movie/${movieId}`);
    }
  };
  return { userNavigate };
};

export default UserNavigate;
