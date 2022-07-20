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
      <nav className="fixed w-full top-0 z-10 flex justify-center  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
        <div className="max-w-6xl flex items-center h-20">
          <div className="w-full flex items-center  justify-between">
            <Link
              className="text-4xl 2xl:mr-40 xl:mr-32 lg:mr-28 md:mr-8 sm:mr-12  pt-2 mx-2"
              to="/"
            >
              <span className="text-[#FFA500]  ">Movie</span>
              hut
            </Link>
            <div className="flex justify-center">
              <div className="mx-2 md:hidden">
                <SearchBox />
              </div>
              <div className="md:hidden">
                {auths.isAuth ? (
                  <button
                    className="font-Raleway text-sm font-semibold py-2 bg-[#0078AA]  px-2 mx-1 mt-1 text-[#f3efef]  duration-500"
                    onClick={handleUserLogOut}
                  >
                    SignOut
                  </button>
                ) : (
                  <Link
                    className="font-Raleway font-semibold py-3 px-3 text-[#3d3d3d]  rounded-2xl duration-500 "
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
                <span className="mx-2" />
                <Link
                  className="font-Raleway font-semibold  py-3 mx-2 lg:mx-4 text-[#3d3d3d]  rounded-2xl duration-500 "
                  to="/search"
                >
                  SEARCH
                </Link>
                <span className="mx-2" />

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
