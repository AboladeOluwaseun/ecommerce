import React from "react";
import plus from "../../Assets/ecommerce-product-page-main/images/icon-plus.svg";
import minus from "../../Assets/ecommerce-product-page-main/images/icon-minus.svg";
import cart from "../../Assets/ecommerce-product-page-main/images/icon-cart.svg";
import { counterActions, cartActions } from "../../Store/reduxStore";
import { useSelector, useDispatch } from "react-redux";
import { products } from "./products";

const ProductInfo = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  // const cartState = useSelector((state) => state.cartState);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const addtoCartHandler = (event, product) => {
    event.preventDefault();
    dispatch(cartActions.addCartItem(counter));
    dispatch(counterActions.clearCount());
    const addToCartPayload = { product, counter };
    dispatch(cartActions.addCartToCartList(addToCartPayload));
  };

  const productDetailDisplay = products.map((product) => {
    return (
      <div
        key={product.id}
        className="w-[80%]  mt-8 md:w-[75%] lmd:mt-16 lg:mt-18 xxl:mt-36 lmd:max-h-[90%]  lmd:animate-productinfo mx-auto sm:w-[70%]  "
      >
        <p className="text-Orange text-[0.9rem] md:relative md:top-7 tracking-widest ">
          SNEAKER COMPANY
        </p>
        <h2 className="text-[1.9rem] lg:text-[2.3rem] lg:top-7 md:text-[1.6rem] md:relative md:top-3 leading-9 font-bold py-6 ">
          {product.productName}
        </h2>
        <p className="leading-8 text-Grayishblue text-[1rem] lg:top-6 lg:text-[0.9rem] sm:text-[1.1rem] md:relative md:top-1 md:leading-6 sm:text-start">
          {product.productDescription}
        </p>
        <div className="flex lmd:block lg:mt-6 lg:block items-center py-8 md:py-5 justify-between">
          <div className="flex  items-center space-x-3">
            <p className="font-bold  text-[2.2rem] md:relative md:text-[2.3rem]">
              ${product.currentPrice}
            </p>
            <p className="text-Orange bg-PaleOrange py-[0.3rem] px-3 rounded-lg">
              50%
            </p>
          </div>
          <p className="text-Grayishblue line-through ">
            ${product.PreviousPrice}
          </p>
        </div>

        <form
          onSubmit={(event) => addtoCartHandler(event, product)}
          className=" lmd:flex lg:flex space-x-3 lmd:relative bottom-10 lg:relative lg:bottom-[1rem] items-center justify-between "
        >
          <div className="flex lmd:w-[40%] lg:w-[40%] items-center justify-between md:relative md:top-3 bg-Lightgrayishblue px-3 py-4 lg:py-4  rounded-lg">
            <img
              onClick={decrementHandler}
              className="cursor-pointer active:scale-[1.7]"
              src={minus}
              alt=""
            />
            <p>{counter}</p>
            <img
              onClick={incrementHandler}
              className="cursor-pointer active:scale-[1.7]"
              src={plus}
              alt=""
            />
          </div>
          <button
            type="submit"
            className="w-[100%] lmd:w-[70%] lg:w-[70%] active:scale-[1.1]  lg:py-4 cursor-pointer md:top-3 my-8 py-4 text-white rounded-lg flex  md:relative  items-center justify-center bg-Orange space-x-3"
          >
            <img src={cart} alt="" />
            <p>Add to cart</p>
          </button>
        </form>
      </div>
    );
  });

  return <>{productDetailDisplay}</>;
};

export default ProductInfo;
