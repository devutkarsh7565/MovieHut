import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import useAuth from "../Hooks/useAuth";
import useLogOut from "../Hooks/useLogOut";
import { AiFillHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { BsCardChecklist } from "react-icons/bs";

const MobileNav = () => {
  const { auths } = useAuth();
  const { userLogOut } = useLogOut();
  const handleUserLogOut = () => {
    userLogOut(auths.setIsAuth);
  };
  return (
    <>
      <nav className="sticky md:hidden w-full bottom-0 z-40  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b h-16  border-gray-200">
        <div
          className="md:hidden w-full h-[1rem] flex justify-between item-center"
          id="mobile-menu"
        >
          <div className="px-2  w-full space-y-1 sm:px-3 flex justify-evenly item-center ">
            <Link
              className=" font-Raleway font-semibold  mx-2  text-[#3d3d3d] rounded-2xl duration-500 "
              to="/"
            >
              <AiFillHome className="text-3xl mt-4 mx-2" />
            </Link>

            <Link
              className="font-Raleway font-semibold   mx-2 text-[#3d3d3d]  rounded-2xl duration-500 "
              to="/search"
            >
              <BsSearch className="text-3xl mt-4 mx-2" />
            </Link>

            <Link
              className="font-Raleway font-semibold  mx-2 text-[#3d3d3d]  rounded-2xl duration-500 "
              to="/genre"
            >
              <BsCardChecklist className="text-3xl mt-4 mx-2" />
            </Link>
            {auths.isAuth && (
              <Link
                className="font-Raleway font-semibold  mx-2 text-[#3d3d3d]  rounded-2xl duration-500 "
                to="/favourite"
              >
                <MdFavorite className="text-3xl mt-4 mx-2" />
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
