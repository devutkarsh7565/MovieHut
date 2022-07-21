import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import useAuth from "../Hooks/useAuth";
import useLogOut from "../Hooks/useLogOut";
const DesktopNav = () => {
  const { auths } = useAuth();
  const { userLogOut } = useLogOut();
  const handleUserLogOut = () => {
    userLogOut(auths.setIsAuth);
  };
  return (
    <>
      <nav className="fixed w-full top-0 z-10 md:flex justify-center  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
        <div className="max-w-6xl flex items-center sm:h-20 h-16">
          <div className="w-full flex items-center  justify-between px-3">
            <Link
              className="md:text-4xl text-2xl 2xl:mr-40 xl:mr-32 lg:mr-28 md:mr-8 sm:mr-12  pt-2 "
              to="/"
            >
              <span className="text-[#FFA500]  ">Movie</span>
              hut
            </Link>
            <div className="flex justify-center">
              <div className="mx-3 sm:mx-2 md:hidden">
                <SearchBox />
              </div>
              <div className="md:hidden">
                {auths.isAuth ? (
                  <button
                    className="font-Raleway text-sm font-semibold py-2 bg-[#4285f4] border hover:border-[#4285f4] hover:text-[#4285f4]  hover:bg-white  px-2 mx-1  text-[#f3efef]  duration-500"
                    onClick={handleUserLogOut}
                  >
                    SignOut
                  </button>
                ) : (
                  <Link
                    className="font-Raleway text-sm font-semibold py-2 bg-[#4285f4] border hover:border-[#4285f4] hover:text-[#4285f4] hover:bg-white  px-2 mx-1  text-[#f3efef]  duration-500"
                    to="/login"
                  >
                    LOGIN
                  </Link>
                )}
              </div>
            </div>
            <div className="hidden md:block ">
              <div className="flex items-center justify-around 2xl:ml-40 xl:ml-32">
                <div className="mx-5 ">
                  <SearchBox />
                </div>
                <Link
                  className=" font-Raleway font-semibold py-3 mx-2 lg:mx-4  text-[#3d3d3d] rounded-2xl duration-500 "
                  to="/"
                >
                  HOME
                </Link>

                <Link
                  className="font-Raleway font-semibold  py-3 mx-2 lg:mx-4 text-[#3d3d3d]  rounded-2xl duration-500 "
                  to="/search"
                >
                  SEARCH
                </Link>

                <Link
                  className="font-Raleway font-semibold py-3 mx-2 lg:mx-4 text-[#3d3d3d]  rounded-2xl duration-500 "
                  to="/genre"
                >
                  GENRE
                </Link>
                {auths.isAuth && (
                  <Link
                    className="font-Raleway font-semibold py-3 mx-2 lg:mx-4 text-[#3d3d3d]  rounded-2xl duration-500 "
                    to="/favourite"
                  >
                    FAVOURITE
                  </Link>
                )}

                {auths.isAuth ? (
                  <button
                    className="font-Raleway font-semibold py-3 bg-[#0078AA]  px-3 mx-2 lg:mx-4 text-[#f3efef]  duration-500"
                    onClick={handleUserLogOut}
                  >
                    SignOut
                  </button>
                ) : (
                  <Link
                    className="font-Raleway font-semibold py-3 px-3 lg:px-4 text-[#3d3d3d]  rounded-2xl duration-500 "
                    to="/login"
                  >
                    LOGIN
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
