import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItems = ({ showCart }) => {
  const cartItems = useSelector((state) => state.cartState.cart);
  const cartItemsCount = useSelector((state) => state.cartState.totalItemCount);
  const setShowCartHandler = () => {
    showCart();
  };
  console.log(cartItems);
  const cartItemsDisplay = cartItems.map((cartItem) => {
    console.log(cartItem.itemId);
    return (
      <li key={cartItem.itemId} className="mt-4">
        <CartItem
          productName={cartItem.ItemName}
          productPrice={cartItem.price}
          productCount={cartItem.itemAmount}
          productId={cartItem.itemId}
        ></CartItem>
      </li>
    );
  });

  return (
    <>
      <div
        onClick={setShowCartHandler}
        className=" fixed top-0 left-0 bg-lightbox opacity-70 w-[100%]  h-[100%] z-[2] "
      ></div>
      <div className=" animate-cart ease-in-out  grid bg-white w-[90%] sm:w-[80%] lmd:w-[60%] lmd:left-[35%] lmd:top-[7rem] xl:w-[35%] xl:left-[60%] sm:left-[15%]   grid-rows-[60px_minmax(100px,_1fr)_50px] z-10 rounded-lg mx-auto px-6 text-[1.6rem] py-4 fixed max-h-[40%]  top-[3.5rem]">
        <p className=" font-bold  border-b-2 border-b-[#ebebeb] text-[2rem] border-b-solid">
          Cart
        </p>
        {cartItemsCount ? (
          <ul className="max-h-[65%]  overflow-auto">{cartItemsDisplay}</ul>
        ) : (
          <p className=" relative top-[35%] text-gray-400 text-center">
            Your Cart is empty
          </p>
        )}

        {cartItemsCount ? (
          <button className=" active:scale-[1.05]  cursor-pointer border-solid w-[100%] h-[100%] mx-auto text-white rounded-[0.7rem] bg-Orange space-x-3 border-t-black">
            Checkout
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CartItems;
