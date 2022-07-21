import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
const useLogOut = () => {
  const navigate = useNavigate();
  const userLogOut = (setIsAuth) => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
      console.log("user logout successfully");
    });
  };
  return { userLogOut };
};

export default useLogOut;
