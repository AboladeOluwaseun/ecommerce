import React from "react";
import previous from "../../Assets/ecommerce-product-page-main/images/icon-previous.svg";
import next from "../../Assets/ecommerce-product-page-main/images/icon-next.svg";
import productImage1 from "../../Assets/ecommerce-product-page-main/images/image-product-1.jpg";
import productImage2 from "../../Assets/ecommerce-product-page-main/images/image-product-2.jpg";
import productImage3 from "../../Assets/ecommerce-product-page-main/images/image-product-3.jpg";
import productImage4 from "../../Assets/ecommerce-product-page-main/images/image-product-4.jpg";
import productThumbnail1 from "../../Assets/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "../../Assets/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "../../Assets/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "../../Assets/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg";

const ProductImages = () => {
  return (
    <>
      <div className="relative my-6">
        <img
          className="absolute md:hidden lg:hidden top-[45%] left-4 bg-white cursor-pointer py-[0.8rem] px-[1rem] rounded-full "
          src={previous}
          alt=""
        />
        <div className="lmd:animate-movein ">
          <img
            className="md:max-w-[80%] lmd:max-w-[24rem] lmd:max-h-[24rem] md:mx-auto md:rounded-lg  lg:w-[27rem] lg:h-[27rem]"
            src={productImage1}
            alt=""
          />
          <div className="hidden lmd:flex justify-center lg:max-w-[100%] lg:mx-auto  items-center md:space-x-[1.1rem] space-x-5 mt-4">
            <img
              className="rounded-lg lg:hover:opacity-80 lg:active:border-2 lg:active:border-solid lg:active:border-Orange cursor-pointer lmd:w-[5.1rem] lmd:h-[5.1rem] lg:w-[5.3rem]  lg:h-[5.3rem] w-[4.5rem] h-[4.5rem]"
              src={productThumbnail1}
              alt=""
            />
            <img
              className="rounded-lg lg:hover:opacity-80 lg:active:border-2 lg:active:border-solid lg:active:border-Orange cursor-pointer lmd:w-[5.1rem] lmd:h-[5.1rem] lg:w-[5.3rem]  lg:h-[5.3rem] w-[4.5rem] h-[4.5rem]"
              src={productThumbnail2}
              alt=""
            />
            <img
              className="rounded-lg lg:hover:opacity-80 lg:active:border-2 lg:active:border-solid lg:active:border-Orange cursor-pointer lmd:w-[5.1rem] lmd:h-[5.1rem] lg:w-[5.3rem]  lg:h-[5.3rem] w-[4.5rem] h-[4.5rem]"
              src={productThumbnail3}
              alt=""
            />
            <img
              className="rounded-lg lg:hover:opacity-80 lg:active:border-2 lg:active:border-solid lg:active:border-Orange cursor-pointer lmd:w-[5.1rem] lmd:h-[5.1rem] lg:w-[5.3rem]   lg:h-[5.3rem] w-[4.5rem] h-[4.5rem]"
              src={productThumbnail4}
              alt=""
            />
          </div>
        </div>
        <img
          className="absolute md:hidden lg:hidden bottom-[45%] right-4 bg-white cursor-pointer py-[0.8rem] px-[1rem] rounded-full "
          src={next}
          alt=""
        />
      </div>
    </>
  );
};

export default ProductImages;
