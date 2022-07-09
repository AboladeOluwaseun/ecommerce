import React from "react";
import Nav from "./Nav";
import SideBar from "./SideBar";
import menu from "../../Assets/ecommerce-product-page-main/images/icon-menu.svg";
import closeMenu from "../../Assets/ecommerce-product-page-main/images/icon-close.svg";
import cart from "../../Assets/ecommerce-product-page-main/images/icon-cart.svg";
import avatar from "../../Assets/ecommerce-product-page-main/images/image-avatar.png";
import { useState } from "react";
import logo from "../../Assets/ecommerce-product-page-main/images/logo.svg";
const Header = () => {
  const [active, setActive] = useState(false);
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const setMenu = () => {
    if (active) {
      setActive(false);
      setIsSidebarOpened(false);
    } else {
      setActive(true);
      setIsSidebarOpened(true);
    }
  };

  return (
    <div className=" container max-w-[90%] py-[0.8rem] mx-auto flex items-center border-b-slate-400 border-b justify-between">
      {active ? (
        <div onClick={setMenu} className="ml-2 mt-1 md:hidden z-10">
          <img className="w-[1.3rem] h-[1.3rem]" src={closeMenu} alt="menu" />
        </div>
      ) : (
        <div onClick={setMenu} className="ml-2 mt-1 md:hidden">
          <img className="w-[1.3rem] h-[1.3rem]" src={menu} alt="menu" />
        </div>
      )}
      <img className="mr-4 xsm:mr-28 sm:mr-72" src={logo} alt="" />
      <SideBar isSidebarOpened={isSidebarOpened}></SideBar>
      <Nav></Nav>
      <div className="flex items-center  relative md:right-[8rem] lg:right-[1rem] md:shrink-0 space-x-5">
        <div className="relative cursor-pointer">
          {" "}
          <img className="w-7 h-7" src={cart} alt="" />
          <p className="absolute top-0 left-5 bg-Orange text-white rounded-full px-[0.3rem] text-[0.8rem]">
            0
          </p>
        </div>
        <img
          className="w-8 h-8 rounded-full cursor-pointer border border-solid border-Orange"
          src={avatar}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
