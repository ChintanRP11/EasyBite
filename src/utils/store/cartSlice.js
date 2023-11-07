import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: "195f7121-3958-42fc-83fc-c84b6a331c78",
        name: "Plant-Based Soul Burger",
        centsPrice: 1345,
        description:
          "Veggie soul patty topped with sauteed onions, portobello mushrooms, jalapenos, lettuce, and hot sauce on a poppy seed bun.",
        available: true,
        imageUrl:
          "https://restaurants-static.skipthedishes.com/images/resized/item-875f051876c2e1c80fb9.jpg",
        mediumImageUrl:
          "https://restaurants-static.skipthedishes.com/images/resized/medium-875f051876c2e1c80fb9.jpg",
        smallImageUrl:
          "https://restaurants-static.skipthedishes.com/images/resized/small-875f051876c2e1c80fb9.jpg",
        isPrimary: false,
      },
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const index = state.items.indexOf(action.payload);
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
