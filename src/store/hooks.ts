import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

import type { AppDispatch, RootState } from './index';

export const useCatsDispatch = useDispatch.withTypes<AppDispatch>();
export const useCatsSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectFavourites = (state: RootState) => state.favourites;

export const selectGallery = (state: RootState) => state.gallery;

export const selectBreeds = (state: RootState) => state.breeds.breeds;
