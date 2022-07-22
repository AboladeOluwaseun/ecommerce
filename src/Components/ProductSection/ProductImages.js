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
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductImages = () => {
  const images = [
    {
      prodimg: productImage1,
      prodThumb: productThumbnail1,
    },
    {
      prodimg: productImage2,
      prodThumb: productThumbnail2,
    },
    {
      prodimg: productImage3,
      prodThumb: productThumbnail3,
    },
    {
      prodimg: productImage4,
      prodThumb: productThumbnail4,
    },
  ];

  const prodImg = images.map((img, index) => {
    return (
      <img
        className="md:max-w-[79%] lmd:max-h-[93%] lg:max-h-[72%] md:mx-auto md:rounded-lg  lg:h-[27rem]"
        src={img.prodimg}
        alt=""
        key={index}
      />
    );
  });
  const prodThumb = images.map((img, index) => {
    return (
      <li key={index}>
        <img
          className="rounded-lg lg:hover:opacity-80 lg:active:border-2 lg:active:border-solid lg:active:border-Orange cursor-pointer lmd:w-[4.7rem] lmd:h-[4.7rem] lg:w-[5.3rem]  lg:h-[5.3rem] w-[4.5rem] h-[4.5rem] xxl:w-[6rem] xxl:h-[6rem]"
          src={img.prodThumb}
          alt=""
        />
      </li>
    );
  });

  return (
    <>
      <div className="relative  lg:mt-[4rem]">
        <img
          className="absolute lmd:hidden lg:hidden top-[45%] left-4 bg-white cursor-pointer py-[0.8rem] px-[1rem] rounded-full "
          src={previous}
          alt=""
        />
        <div className="lmd:animate-movein ">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            dynamicHeight={true}
          >
            {prodImg}
          </Carousel>

          <ul className="hidden lmd:flex justify-center lg:max-w-[100%] lg:mx-auto  items-center md:space-x-[1.1rem] xxl:space-x-12 space-x-5 xxl:mt-8 mt-4">
            {prodThumb}
          </ul>
        </div>
        <img
          className="absolute lmd:hidden lg:hidden bottom-[45%] right-4 bg-white cursor-pointer py-[0.8rem] px-[1rem] rounded-full "
          src={next}
          alt=""
        />
      </div>
    </>
  );
};

export default ProductImages;
