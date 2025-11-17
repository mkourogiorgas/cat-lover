import { describe, expect,it } from 'vitest';
import favouritesReducer, {
  favouritesActions,
} from '../../../src/store/favouritesSlice';

import type { FavouritesState } from '../../../src/store/types';
import type { Cat } from '../../../src/types';

const { toggleFavourite, clearFavourites, loadFavourites } = favouritesActions;

const mockCat: Cat = {
  id: 'cat1',
  url: 'http://example.com/cat1.jpg',
  width: 400,
  height: 300,
  breeds: [],
};

describe('favouritesSlice', () => {
  const initialState: FavouritesState = {};

  describe('toggleFavourite', () => {
    it('should add a cat to favourites', () => {
      const state: FavouritesState = { ...initialState };
      const action = toggleFavourite(mockCat);
      const newState = favouritesReducer(state, action);
      expect(newState['cat1']).toBe(mockCat);
    });

    it('should remove a cat from favourites', () => {
      const state: FavouritesState = { cat1: mockCat };
      const action = toggleFavourite(mockCat);
      const newState = favouritesReducer(state, action);
      expect(newState['cat1']).toBeUndefined();
    });
  });

  describe('clearFavourites', () => {
    it('should work on empty state', () => {
      const state: FavouritesState = { ...initialState };
      const action = clearFavourites();
      const newState = favouritesReducer(state, action);
      expect(newState).toEqual({});
    });
  });

  describe('loadFavourites', () => {
    it('should load favourites from payload', () => {
      const state: FavouritesState = { ...initialState };
      const payload: FavouritesState = { cat1: mockCat };
      const action = loadFavourites(payload);
      const newState = favouritesReducer(state, action);
      expect(newState['cat1']).toBe(mockCat);
    });

    it('should replace existing favourites', () => {
      const state: FavouritesState = { cat1: mockCat };
      const cat2: Cat = { ...mockCat, id: 'cat2' };
      const payload: FavouritesState = { cat2: cat2 };
      const action = loadFavourites(payload);
      const newState = favouritesReducer(state, action);
      expect(newState['cat1']).toBeUndefined();
      expect(newState['cat2']).toBe(cat2);
    });

    it('should load multiple favourites at once', () => {
      const state: FavouritesState = { ...initialState };
      const cat2: Cat = { ...mockCat, id: 'cat2' };
      const cat3: Cat = { ...mockCat, id: 'cat3' };
      const payload: FavouritesState = {
        cat1: mockCat,
        cat2: cat2,
        cat3: cat3,
      };
      const action = loadFavourites(payload);
      const newState = favouritesReducer(state, action);
      expect(Object.keys(newState)).toHaveLength(3);
    });
  });
});
