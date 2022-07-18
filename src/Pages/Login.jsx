import useAuth from "../Hooks/useAuth";
import { auth, provider } from "../Hooks/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { auths } = useAuth();
  const navigate = useNavigate();
  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("Auth", true);
      auths.setIsAuth(true);
      console.log("user login successfully");
      navigate("/");
    });
  };
  return (
    <>
      <p>signIn with google to continue</p>
      <button onClick={signUpWithGoogle}>signIn with google</button>
    </>
  );
};

export default Login;
