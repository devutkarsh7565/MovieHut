import { Outlet } from "react-router-dom";
import FavouriteProvider from "../Providers/FavouriteProvider";
import MobileNav from "./MobileNav";
import { Navbar } from "./Navbar";

export function LayoutWrapper() {
  return (
    <div className="flex justify-center w-full  min-h-screen">
      <div className="flex flex-col w-full max-w-6xl h-full items-center justify-start ">
        <FavouriteProvider>
          <Navbar />
          <Outlet />
          <MobileNav className="flex justify-end" />
        </FavouriteProvider>
      </div>
    </div>
  );
}
