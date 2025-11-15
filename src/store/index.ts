import { configureStore } from '@reduxjs/toolkit';
import breedsReducer from './breedsSlice';
import favouritesReducer from './favouritesSlice';
import galleryReducer from './gallerySlice';

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    favourites: favouritesReducer,
    breeds: breedsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
