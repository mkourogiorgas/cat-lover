import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { AnalyticsState } from './types';

const initialAnalyticsState: AnalyticsState = {
  galleryCats: 0,
  breedsViewed: {},
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: initialAnalyticsState,
  reducers: {
    incrementGalleryCats: (state, action: PayloadAction<number>) => {
      state.galleryCats += action.payload;
    },
    incrementBreedView: (
      state,
      action: PayloadAction<{ breedName: string }>
    ) => {
      const breedName = action.payload.breedName;
      state.breedsViewed[breedName] = (state.breedsViewed[breedName] || 0) + 1;
    },
    loadAnalytics: (_state, action: PayloadAction<AnalyticsState>) => {
      return action.payload;
    },
    resetAnalytics: () => initialAnalyticsState,
  },
});

export const analyticsActions = analyticsSlice.actions;
export default analyticsSlice.reducer;
