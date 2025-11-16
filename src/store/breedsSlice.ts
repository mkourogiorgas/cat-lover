import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Breed } from '../types';

interface BreedsStateWithMeta {
  data: { [key: string]: Breed };
  lastFetched: number | null;
}

const initialBreedsState: BreedsStateWithMeta = {
  data: {},
  lastFetched: null,
};

const breedsSlice = createSlice({
  name: 'breeds',
  initialState: initialBreedsState,
  reducers: {
    addBreeds: (state, action: PayloadAction<Breed[]>) => {
      action.payload.forEach((breed) => {
        state.data[breed.id] = breed;
      });
      state.lastFetched = Date.now();
    },
    loadBreeds: (_state, action: PayloadAction<BreedsStateWithMeta>) => {
      return action.payload;
    },
    clearBreeds: () => initialBreedsState,
  },
});

export const breedsActions = breedsSlice.actions;
export default breedsSlice.reducer;
export type { BreedsStateWithMeta };
