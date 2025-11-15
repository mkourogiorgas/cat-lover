import { configureStore } from '@reduxjs/toolkit';

import breedsReducer from './breedsSlice';
import favouritesReducer from './favouritesSlice';
import galleryReducer from './gallerySlice';

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    gallery: galleryReducer,
    breeds: breedsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
