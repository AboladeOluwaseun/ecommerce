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
// import Carousel from "react-elastic-carousel";
import { productImageActions } from "../../Store/reduxStore";
import { useSelector, useDispatch } from "react-redux";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";

import { useRef } from "react";

const ProductImages = () => {
  const setTimeOutRef = useRef(null);
  const timeOutReset = () => {
    if (setTimeOutRef.current) {
      clearTimeout(setTimeOutRef.current);
    }
  };

  const dispatch = useDispatch();
  const productImageIndex = useSelector(
    (state) => state.productImageState.productImageIndex
  );

  const images = [productImage1, productImage2, productImage3, productImage4];

  const productThumbnails = [
    productThumbnail1,
    productThumbnail2,
    productThumbnail3,
    productThumbnail4,
  ];

  const setProductImage = (index) => {
    dispatch(productImageActions.setProductImage(index));
  };

  const prodThumb = productThumbnails.map((img, index) => {
    return (
      <li key={index} onClick={setProductImage.bind(null, index)}>
        <img
          className={`w-[90%] h-[90%] xl:w-[75%] xl:h-[75%] ${
            productImageIndex === index
              ? "sm:border-4 sm:opacity-80 sm:border-solid sm:border-Orange"
              : ""
          } rounded-lg cursor-pointer`}
          src={img}
          alt=""
        />
      </li>
    );
  });
  const payload = { productImageIndex, images };
  const nextDisplayHandler = () => {
    dispatch(productImageActions.nextProductImage(payload));
  };

  const prevDisplayHandler = () => {
    dispatch(productImageActions.prevProductImage(payload));
  };
  const dispactchvar = dispatch(productImageActions.infiniteDisplay(payload));
  useEffect(() => {
    setTimeOutRef.current = setTimeout(() => {
      console.log(productImageIndex);
      dispatch(productImageActions.infiniteDisplay(payload));
    }, 2500);

    return () => {
      timeOutReset();
    };
  }, [dispactchvar]);

  return (
    <>
      <div className="relative lmd:mt-[5rem]   lg:mt-[4rem]">
        <img
          className="absolute w-16 h-16 sm:left-28 lmd:hidden lg:hidden top-[40%] left-[0.8rem] bg-white cursor-pointer py-[1.3rem] px-[1.6rem] rounded-full "
          src={previous}
          alt=""
          onClick={prevDisplayHandler}
        />
        <div className="lmd:animate-movein ">
          <img
            className="sm:max-w-[75%] lmd:max-w-[80%] xl:max-w-[75%] sm:mx-auto sm:rounded-lg"
            src={images[productImageIndex]}
            alt=""
          />

          <ul className="hidden xl:mr-11 sm:max-w-[75%] sm:mx-auto sm:flex justify-center lmd:max-w-[80%] lmd:mx-auto  items-center xxl:mt-8 mt-4">
            {prodThumb}
          </ul>
        </div>
        <img
          className="absolute w-16 h-16 sm:bottom-[48%] bottom-[42%] lmd:hidden sm:right-28 right-[0.5rem] bg-white cursor-pointer py-[1.2rem] px-[1.4rem] rounded-full "
          src={next}
          alt=""
          onClick={nextDisplayHandler}
        />
      </div>
    </>
  );
};

export default ProductImages;
