import React from "react";
import plus from "../../Assets/ecommerce-product-page-main/images/icon-plus.svg";
import minus from "../../Assets/ecommerce-product-page-main/images/icon-minus.svg";
import cart from "../../Assets/ecommerce-product-page-main/images/icon-cart.svg";

const ProductInfo = () => {
  return (
    <>
      <div className="w-[80%] md:w-[75%] xl:mt-[2rem] lmd:w-[80%] lg:w-[80%] xl:mr-40 xl:w-[70%] lmd:animate-productinfo  mx-auto sm:w-[80%] lmd:mt-[5rem] lg:mt-[3rem] ">
        <p className="text-Orange text-[0.9rem] md:relative md:top-7 tracking-widest ">
          SNEAKER COMPANY
        </p>
        <h2 className="text-[1.9rem] lg:text-[2.3rem] lg:top-7 md:text-[1.6rem] md:relative md:top-3 leading-9 font-bold py-6 ">
          Fall Limited Edition Sneakers
        </h2>
        <p className="leading-8 text-Grayishblue text-[1rem] lg:top-6 lg:text-[0.9rem] sm:text-[1.1rem] md:relative md:top-1 md:leading-6 sm:text-start">
          These low profile sneakers are your perfect wear companion. Featuring
          a durable rubber outer sole, they'll withstand everything the weather
          can offer.
        </p>
        <div className="flex lmd:block lg:mt-6 lg:block items-center py-8 md:py-5 justify-between">
          <div className="flex  items-center space-x-3">
            <p className="font-bold  text-[2.2rem] md:relative md:text-[2.3rem]">
              $125.00
            </p>
            <p className="text-Orange bg-PaleOrange py-[0.3rem] px-3 rounded-lg">
              50%
            </p>
          </div>
          <p className="text-Grayishblue line-through ">$250.00</p>
        </div>

        <div className=" lmd:flex lg:flex space-x-3 lmd:relative bottom-10 lg:relative lg:bottom-[1rem] items-center justify-between ">
          <div className="flex lmd:w-[40%] lg:w-[40%] items-center justify-between md:relative md:top-3 bg-Lightgrayishblue px-3 py-4 lg:py-4  rounded-lg">
            <img className="cursor-pointer" src={minus} alt="" />
            <p>3</p>
            <img className="cursor-pointer" src={plus} alt="" />
          </div>
          <div className="lmd:w-[70%] lg:w-[70%]  lg:py-4 cursor-pointer md:top-3 my-8 py-4 text-white rounded-lg flex  md:relative  items-center justify-center bg-Orange space-x-3">
            <img src={cart} alt="" />
            <p>Add to cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
