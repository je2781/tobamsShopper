import  {configureStore} from '@reduxjs/toolkit';
import  {favoritesSlice} from './favorites-slice';
import  {cartSlice} from './cart-slice';
import  {productSlice} from './product-slice';

const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        cart: cartSlice.reducer,
        product: productSlice.reducer
    }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;