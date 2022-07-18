import { Outlet } from "react-router-dom";
import FavouriteProvider from "../Providers/FavouriteProvider";
import { Navbar } from "./Navbar";

export function LayoutWrapper() {
  return (
    <div className="flex justify-center w-full bg-[#f5f3f3] min-h-screen">
      <div className="flex flex-col w-full max-w-6xl h-full items-center justify-start ">
        <FavouriteProvider>
          <Navbar />
          <Outlet />
        </FavouriteProvider>
      </div>
    </div>
  );
}
