import React from "react";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

const ProductSection = () => {
  return (
    <>
      <div className="max-h[100vh] md:mt-16 mt-10 lmd:mb-12 lmd:mt-5  lmd:grid grid-cols-2 gap-x-12 lg:gap-x-24  lmd:max-w[90%] lg:max-w-[80%] xl:max-w-[75%] lg:mx-auto lmd:mx-auto md:max-w-[100%] md:mx-auto">
        <ProductImages></ProductImages>
        <ProductInfo></ProductInfo>
      </div>
    </>
  );
};

export default ProductSection;
