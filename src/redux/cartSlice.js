import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.cartItems.find(
        item => item.id === action.payload.id
      );
      if (!existingItem) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
      state.totalQuantity++;
      state.totalPrice += action.payload.price;
    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );
      state.totalPrice -= state.cartItems[itemIndex].price * state.cartItems[itemIndex].quantity;
      state.totalQuantity -= state.cartItems[itemIndex].quantity;
      state.cartItems.splice(itemIndex, 1);
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      item.quantity++;
      state.totalQuantity++;
      state.totalPrice += item.price;
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          item => item.id !== action.payload.id
        );
      } else {
        item.quantity--;
      }
      state.totalQuantity--;
      state.totalPrice -= item.price;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
