// import { legacy_createStore as createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      if (state.counter <= 0) {
        state.counter = 0;
      } else {
        state.counter--;
      }
    },
    clearCount(state) {
      state.counter = 0;
    },
  },
});
const cartSlice = createSlice({
  name: "cartState",
  initialState: {
    cart: [],
    totalItemCount: 0,
    itemDetail: {
      itemName: "",
      price: 0,
      itemAmount: 0,
      totalPrice: 0,
    },
    showCounter: false,
  },
  reducers: {
    addCartItem(state, action) {
      state.cartItems = action.payload;
      state.showCounter = true;
    },
    addCartToCartList(state, action) {
      state.itemDetail = {
        itemName: action.payload.product.productName,
        price: action.payload.product.currentPrice,
        itemAmount: action.payload.counter,
        totalPrice:
          action.payload.product.currentPrice * action.payload.counter,
        itemId: action.payload.product.id,
      };

      const existingItemIndex = state.cart.findIndex(
        (item) => item.itemId === action.payload.product.id
      );
      console.log(existingItemIndex);
      const existingItem = state.cart[existingItemIndex];
      console.log(existingItem);
      let updatedCart;
      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          itemAmount: existingItem.itemAmount + action.payload.counter,
        };
        updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = updatedItem;
        state.cart = updatedCart;
      } else {
        updatedCart = state.cart.concat(state.itemDetail);
        state.cart = updatedCart;
      }
      state.totalItemCount = state.cart.length;
    },
    deleteItemFromList(state, action) {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.itemId === action.payload
      );
      const existingItem = state.cart[existingItemIndex];
      console.log(existingItem);
      if (existingItem.itemId === action.payload) {
        const newCart = state.cart.filter(
          (item) => item.itemId !== action.payload
        );
        state.cart = newCart;
      }

      if (state.cart.length === 0) {
        state.totalItemCount = 0;
      }
    },
  },
});

// ######REDUX without toolkit
// const initialState = { counter: 0 };
// const reducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "decrement") {
//     if (state.counter <= 0) {
//       return {
//         counter: 0,
//       };
//     }
//     return {
//       counter: state.counter - 1,
//     };
//   }

//   return state;
// };
export const counterActions = counterSlice.actions;
export const cartActions = cartSlice.actions;
const store = configureStore({
  reducer: { counter: counterSlice.reducer, cartState: cartSlice.reducer },
});

export default store;
