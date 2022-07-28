import React from "react";
import prodImg from "../../Assets/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../Assets/ecommerce-product-page-main/images/icon-delete.svg";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/reduxStore";
const CartItem = ({ productName, productPrice, productCount, productId }) => {
  const totalPrice = productPrice * productCount;

  const dispatch = useDispatch();
  const deleteItemHandler = () => {
    dispatch(cartActions.deleteItemFromList(productId));
  };
  return (
    <>
      <div className="overflow-auto ">
        <div className="h-[70%] text-[0.9rem] flex items-center justify-between ">
          <img
            className="rounded-lg w-[4rem] h-[4rem]"
            src={prodImg}
            alt="prdImg"
          />
          <div>
            <p>{productName}</p>
            <p>
              ${productPrice} x {productCount} ={" "}
              <span className="font-bold">${totalPrice}</span>{" "}
            </p>
          </div>
          <div
            onClick={deleteItemHandler}
            className="cursor-pointer  active:scale-[1.1]"
          >
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
