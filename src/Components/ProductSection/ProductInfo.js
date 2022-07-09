import React from "react";
import plus from "../../Assets/ecommerce-product-page-main/images/icon-plus.svg";
import minus from "../../Assets/ecommerce-product-page-main/images/icon-minus.svg";
import cart from "../../Assets/ecommerce-product-page-main/images/icon-cart.svg";

const ProductInfo = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <p className="text-Orange text-[0.9rem] tracking-widest ">
          SNEAKER COMPANY
        </p>
        <h2 className="text-[1.9rem] leading-9 font-bold py-6 ">
          Fall Limited Edition Sneakers
        </h2>
        <p className="leading-8">
          These low profile sneakers are your perfect wear companion. Featuring
          a durable rubber outer sole, they'll withstand everything the weather
          can offer.
        </p>
        <div className="flex items-center py-8 justify-between">
          <div className="flex items-center space-x-3">
            <p className="font-bold text-[2.2rem]">$125.00</p>
            <p className="text-Orange bg-PaleOrange py-[0.3rem] px-3 rounded-lg">
              50%
            </p>
          </div>
          <p>$250.00</p>
        </div>

        <div>
          <div className="flex items-center justify-between bg-Lightgrayishblue px-3 py-4 rounded-t-lg">
            <img src={minus} alt="" />
            <p>3</p>
            <img src={plus} alt="" />
          </div>
          <div className="my-8 py-[0.9rem] text-white rounded-lg flex items-center justify-center bg-Orange space-x-3">
            <img src={cart} alt="" />
            <p>Add to cart</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
