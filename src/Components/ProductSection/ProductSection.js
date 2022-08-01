import React from "react";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

const ProductSection = () => {
  return (
    <>
      <div className="max-h-[100vh] md:mt-16 mt-10 lmd:mb-12 lmd:mt-5 lmd:grid grid-cols-2  lmd:max-w-[95%] lg:max-w-[80%] xl:max-w-[75%] xxl:max-w-[70%] lmd:mx-auto md:max-w-[100%] md:mx-auto">
        <ProductImages></ProductImages>
        <ProductInfo></ProductInfo>
      </div>
    </>
  );
};

export default ProductSection;
