import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Cat } from '../types';
import type { CatsState } from './types';

const initialGalleryState: CatsState = {};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: initialGalleryState,
  reducers: {
    addCats: (state, action: PayloadAction<Cat[]>) => {
      console.log('REDUCER CALLED - addCats action payload:', action.payload);
      const newState = { ...state };
      action.payload.forEach((cat) => {
        newState[cat.id] = cat;
      });
      console.log('REDUCER - State after update:', newState);
      return newState;
    },
    clearCats: () => initialGalleryState,
  },
});

export const galleryActions = gallerySlice.actions;
export default gallerySlice.reducer;
