import React from "react";

const Nav = () => {
  const navMenu = ["Collections", "Men", "Women", "About", "Contact"];
  const menuItem = navMenu.map((menu, index) => {
    return (
      <li
        key={index}
        className="hover:text-Darkgrayishblue border-b-transparent hover:border-b-4 py-2 hover:border-Orange hover:ease-in hover:duration-500 "
      >
        <a href="/">{menu}</a>
      </li>
    );
  });
  console.log(menuItem);
  return (
    <>
      <div className="lmd:animate-nav">
        <ul className="hidden lmd:flex space-x-5 items-center relative  right-[16rem] text-Grayishblue mt-2 text-[0.9rem] lg:right-[16rem] lg:text-[1.2rem] xl:right-[17rem] xl:text-[1.3rem] xl:space-x-10 ">
          {menuItem}
        </ul>
      </div>
    </>
  );
};

export default Nav;
