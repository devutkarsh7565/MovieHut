import * as React from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import SearchBox from "./SearchBox";
import useAuth from "../Hooks/useAuth";
import useLogOut from "../Hooks/useLogOut";
import DesktopNav from "./DesktopNav";

export function Navbar() {
  const { auths } = useAuth();
  const { userLogOut } = useLogOut();
  const handleUserLogOut = () => {
    userLogOut(auths.setIsAuth);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DesktopNav />
    </>
  );
}
