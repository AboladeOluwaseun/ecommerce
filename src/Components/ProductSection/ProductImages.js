import React from "react";
import previous from "../../Assets/ecommerce-product-page-main/images/icon-previous.svg";
import next from "../../Assets/ecommerce-product-page-main/images/icon-next.svg";
import productImage1 from "../../Assets/ecommerce-product-page-main/images/image-product-1.jpg";

const ProductImages = () => {
  return (
    <>
      <div className="relative my-6">
        <img
          className="absolute top-[45%] left-4 bg-white cursor-pointer py-[0.8rem] px-[1rem] rounded-full "
          src={previous}
          alt=""
        />
        <div>
          <img src={productImage1} alt="" />
          <div className="hidden md:flex">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <img
          className="absolute bottom-[45%] right-4 bg-white cursor-pointer py-[0.8rem] px-[1rem] rounded-full "
          src={next}
          alt=""
        />
      </div>
    </>
  );
};

export default ProductImages;
