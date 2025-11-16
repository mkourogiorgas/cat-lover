import { configureStore } from '@reduxjs/toolkit';
import analyticsReducer from './analyticsSlice';
import breedsReducer from './breedsSlice';
import favouritesReducer from './favouritesSlice';
import galleryReducer from './gallerySlice';

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    favourites: favouritesReducer,
    breeds: breedsReducer,
    analytics: analyticsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
