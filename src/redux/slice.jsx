import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity || 1; // increment if exists
      } else {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.quantity = quantity > 1 ? quantity : 1;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    resetCart: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, updateQuantity, resetCart } = cartSlice.actions;
export default cartSlice.reducer;

