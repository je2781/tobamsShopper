import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  favoriteMenuIds: string[];
}

const initialState: initialStateProps = {
  favoriteMenuIds: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addFavorite(state, action) {
      state.favoriteMenuIds.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favoriteMenuIds.splice(state.favoriteMenuIds.indexOf(action.payload), 1);
    },
  },
});

export default favoritesSlice.actions;
