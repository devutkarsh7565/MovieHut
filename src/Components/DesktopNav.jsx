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
      <nav className="sticky w-full top-0 z-10  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
        <div className="w-full flex items-center h-20">
          <div className="w-full flex items-center  justify-between">
            <Link className="text-4xl  pt-2 mx-2" to="/">
              <span className="text-[#FFA500] ">Movie</span>hut
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
              <div className="flex items-center justify-around">
                <div className="mx-3 ">
                  <SearchBox />
                </div>
                <Link
                  className=" font-Raleway font-semibold py-3 mx-2  text-[#3d3d3d] rounded-2xl duration-500 "
                  to="/"
                >
                  HOME
                </Link>
                <span className="mx-2" />
                <Link
                  className="font-Raleway font-semibold  py-3 mx-2 text-[#3d3d3d]  rounded-2xl duration-500 "
                  to="/search"
                >
                  SEARCH
                </Link>
                <span className="mx-2" />

                <Link
                  className="font-Raleway font-semibold py-3 mx-2 text-[#3d3d3d]  rounded-2xl duration-500 "
                  to="/genre"
                >
                  GENRE
                </Link>
                {auths.isAuth && (
                  <Link
                    className="font-Raleway font-semibold py-3 mx-2 text-[#3d3d3d]  rounded-2xl duration-500 "
                    to="/favourite"
                  >
                    FAVOURITE
                  </Link>
                )}

                {auths.isAuth ? (
                  <button
                    className="font-Raleway font-semibold py-3 bg-[#0078AA]  px-3 mx-2 text-[#f3efef]  duration-500"
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
