import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Cat } from '../types';
import type { FavouritesState } from './types';

const initialFavouritesState: FavouritesState = {};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: initialFavouritesState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<Cat>) => {
      const cat = action.payload;
      if (state[cat.id]) {
        delete state[cat.id];
      } else {
        state[cat.id] = cat;
      }
    },
    clearFavourites: () => initialFavouritesState,
  },
});

export const favouritesActions = favouritesSlice.actions;
export default favouritesSlice.reducer;
