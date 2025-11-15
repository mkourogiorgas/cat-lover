import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Breed } from '../types';
import type { BreedsState } from './types';

const initialBreedsState: BreedsState = {};

const breedsSlice = createSlice({
  name: 'breeds',
  initialState: initialBreedsState,
  reducers: {
    addBreeds: (state, action: PayloadAction<Breed[]>) => {
      action.payload.forEach((breed) => {
        state[breed.id] = breed;
      });
    },
    clearBreeds: () => initialBreedsState,
  },
});

export const breedsActions = breedsSlice.actions;
export default breedsSlice.reducer;
