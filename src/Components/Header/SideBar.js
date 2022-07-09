import React from "react";

const SideBar = ({ isSidebarOpened }) => {
  const navMenu = ["Collections", "Men", "Women", "About", "Contact"];
  const menuItem = navMenu.map((menu, index) => {
    return (
      <li key={index} className="p-3">
        <a href="/">{menu}</a>
      </li>
    );
  });
  return (
    <>
      {isSidebarOpened && (
        <div className="fixed top-0 left-0 bg-lightbox opacity-70 w-[100%] h-[100%] z-[2] md:hidden"></div>
      )}
      <div
        className={`fixed  ease-in-out duration-500 z-[5]  top-0 left-0  h-[100%] w-[70%]  block bg-white  md:hidden ${
          isSidebarOpened ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="p-8 relative top-20 text-[1.2rem] hover:border-b hover:border-Orange font-semibold">
          {menuItem}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
