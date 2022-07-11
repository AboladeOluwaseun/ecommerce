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
    <div className="  container max-w-[90%] py-[0.8rem] md:py-8 mx-auto sm:py-6 flex items-center border-b-slate-400 border-b justify-between">
      {active ? (
        <div
          onClick={setMenu}
          className="cursor-pointer ml-2 mt-1  lmd:hidden z-10"
        >
          <img className=" w-[1.3rem] h-[1.3rem]" src={closeMenu} alt="menu" />
        </div>
      ) : (
        <div onClick={setMenu} className="cursor-pointer ml-2 mt-1 lmd:hidden">
          <img
            className="w-[1.5rem] h-[1.0rem] sm:w-[1.6rem] sm:h-[1.2rem]"
            src={menu}
            alt="menu"
          />
        </div>
      )}
      <img
        className=" lmd:animate-logo w-[8rem] md:w-[12rem] xsm:w-[9rem] sm:w-[11rem] mr-9 xsm:mr-[7.8rem] md:mr-[22rem] sm:mr-[16rem] lmd:w-[16rem] "
        src={logo}
        alt=""
      />
      <SideBar isSidebarOpened={isSidebarOpened}></SideBar>
      <Nav></Nav>
      <div className=" lmd:animate-profilebounce lmd:hover:animate-profilebounce flex items-center  relative  lg:right-[1rem] md:shrink-0 space-x-5">
        <div className="relative cursor-pointer">
          {" "}
          <img
            className="w-[1.4rem] h-[1.4rem] sm:w-[1.7rem] sm:h-[1.7rem]"
            src={cart}
            alt=""
          />
          <p className="absolute top-0 left-4 bg-Orange text-white rounded-full px-[0.3rem] text-[0.6rem]">
            0
          </p>
        </div>
        <img
          className="w-6 h-6 sm:w-[1.8rem] sm:h-[1.8rem] rounded-full cursor-pointer border border-solid border-Orange"
          src={avatar}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
