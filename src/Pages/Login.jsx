import useAuth from "../Hooks/useAuth";
import { auth, provider } from "../Hooks/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState(false);
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
  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .then((result) => {
        localStorage.setItem("Auth", true);
        auths.setIsAuth(true);
        console.log("user login successfully");
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        console.log(error.message);
      });
  };
  return (
    <>
      {/* <div className="w-full flex flex-col justify-center items-center min-h-screen">
        <p>signIn with google to continue</p>
        <button onClick={signUpWithGoogle}>signIn with google</button>
        <form action="">
          <input
            type="email"
            placeholder="enter your email"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            onChange={(e) => setRegisterPassword(e.target.value)}
            type="password"
            placeholder="enter your password"
          />
          <button onClick={(e) => handleRegister(e)}>signUp now</button>
        </form>
      </div> */}

      <div className="min-h-screen w-screen bg-gray-100 text-gray-800 flex flex-col justify-center items-center py-6 sm:py-12 ">
        <div className="py-3 md:w-2/5 sm:w-96 w-80 sm:mx-auto text-center">
          <span className="text-2xl font-light">Login with your account</span>
          <div className="mt-4 bg-white rounded-xl shadow-md text-left ">
            <div className="flex justify-center items-center h-10 rounded-t-md bg-[#4285f4] ">
              <span className="text-white py-2 text-xl ">
                <Link className="mr-3 font-medium" to="/signup">
                  Signup
                </Link>
                |
                <Link className="ml-3 font-medium" to="/login">
                  Login
                </Link>
              </span>
            </div>
            <div className="px-8 py-6">
              <div className="flex justify-center">
                <div class="flex justify-between w-[182px] h-[42px] border-[#4285f4] border  mb-8">
                  <div class=" mt-[1px] ml-[1px] w-[40px] h-[40px]  border-[#4285f4] border-b border-r bg-[#fff]">
                    <img
                      class=" mt-3 ml-3 w-[18px] h-[18px]"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                  </div>
                  <p class="w-[141px] font-normal text-sm flex items-center pl-2 text-white cursor-pointer bg-[#4285f4] hover:text-[#4285f4] hover:bg-[white] ">
                    <b onClick={signUpWithGoogle}>Sign in with google</b>
                  </p>
                </div>
              </div>
              <label className="block font-semibold">Username or Email</label>
              <input
                onChange={(e) => setRegisterEmail(e.target.value)}
                type="text"
                placeholder="Email"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none  focus:ring-1  focus:ring-[#4285f4] rounded-md"
              />
              <label className="block mt-3 font-semibold">
                Username or Email
              </label>
              <input
                onChange={(e) => setRegisterPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none  focus:ring-1   focus:ring-[#4285f4]  rounded-md"
              />
              <div className="flex justify-between items-baseline">
                <button
                  onClick={(e) => handleRegister(e)}
                  type="submit"
                  className="mt-4 bg-[#4285f4] px-6 py-3 rounded-lg text-white hover:bg-white hover:text-[#7A0BC0] border-2 border-[#4285f4]"
                >
                  Login
                </button>
                <a href="#" className="text-sm hover:underline">
                  Forget Password
                </a>
              </div>
              {error && <span>Wrong email and password</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
