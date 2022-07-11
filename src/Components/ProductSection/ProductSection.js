import React from "react";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";

const ProductSection = () => {
  return (
    <>
      <div className="max-h[100vh] md:mt-16 mt-10  lmd:grid grid-cols-2 gap-x-1  lmd:max-w[90%] lg:max-w-[80%] xl:max-w-[75%] lmd:mx-auto md:max-w-[100%] md:mx-auto">
        <ProductImages></ProductImages>
        <ProductInfo></ProductInfo>
      </div>
    </>
  );
};

export default ProductSection;
