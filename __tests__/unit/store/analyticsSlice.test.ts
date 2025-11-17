import { describe, it, expect } from 'vitest';
import analyticsReducer, {
  analyticsActions,
} from '../../../src/store/analyticsSlice';
import type { AnalyticsState } from '../../../src/store/types';

const {
  incrementBreedView,
  incrementGalleryCats,
  resetAnalytics,
  loadAnalytics,
} = analyticsActions;

describe('analyticsSlice', () => {
  const initialState: AnalyticsState = {
    galleryCats: 0,
    breedsViewed: {},
  };

  describe('incrementGalleryCats', () => {
    it('should increment gallery cats count by the number given', () => {
      const state = { ...initialState };
      const action = incrementGalleryCats(8);
      const newState = analyticsReducer(state, action);
      expect(newState.galleryCats).toBe(8);
    });

    it('should add to existing gallery cats count', () => {
      const state: AnalyticsState = { galleryCats: 5, breedsViewed: {} };
      const action = incrementGalleryCats(10);
      const newState = analyticsReducer(state, action);
      expect(newState.galleryCats).toBe(15);
    });
  });

  describe('incrementBreedView', () => {
    it('should add new breed to breedsViewed', () => {
      const state = { ...initialState };
      const action = incrementBreedView({ breedName: 'Randrom Breed Name' });
      const newState = analyticsReducer(state, action);
      expect(newState.breedsViewed['Randrom Breed Name']).toBe(1);
    });

    it('should increment existing breed view count', () => {
      const state: AnalyticsState = {
        galleryCats: 0,
        breedsViewed: { 'Random Breed Name': 2 },
      };
      const action = incrementBreedView({ breedName: 'Random Breed Name' });
      const newState = analyticsReducer(state, action);
      expect(newState.breedsViewed['Random Breed Name']).toBe(3);
    });

    it('should track multiple different breeds and increment correctly all of them', () => {
      let state: AnalyticsState = { ...initialState };
      state = analyticsReducer(
        state,
        incrementBreedView({ breedName: 'Breed 2' })
      );
      state = analyticsReducer(
        state,
        incrementBreedView({ breedName: 'Breed 1' })
      );
      state = analyticsReducer(
        state,
        incrementBreedView({ breedName: 'Breed 2' })
      );

      expect(state.breedsViewed['Breed 2']).toBe(2);
      expect(state.breedsViewed['Breed 1']).toBe(1);
    });

    it('should handle breed names with spaces', () => {
      const state = { ...initialState };
      const action = incrementBreedView({ breedName: 'Maine Coon' });
      const newState = analyticsReducer(state, action);
      expect(newState.breedsViewed['Maine Coon']).toBe(1);
    });
  });

  describe('resetAnalytics', () => {
    it('should reset analytics to initial state', () => {
      const state: AnalyticsState = {
        galleryCats: 100,
        breedsViewed: { Siamese: 10, Persian: 5 },
      };
      const action = resetAnalytics();
      const newState = analyticsReducer(state, action);
      expect(newState.galleryCats).toBe(0);
      expect(newState.breedsViewed).toEqual({});
    });
  });

  describe('loadAnalytics', () => {
    it('should load analytics state from payload', () => {
      const state = { ...initialState };
      const payload: AnalyticsState = {
        galleryCats: 22,
        breedsViewed: { 'Random Breed': 15 },
      };
      const action = loadAnalytics(payload);
      const newState = analyticsReducer(state, action);
      expect(newState.galleryCats).toBe(22);
      expect(newState.breedsViewed['Random Breed']).toBe(15);
    });

    it('should replace entire analytics state', () => {
      const state: AnalyticsState = {
        galleryCats: 100,
        breedsViewed: { Persian: 10 },
      };
      const payload: AnalyticsState = {
        galleryCats: 25,
        breedsViewed: { Siamese: 8, Bengal: 3 },
      };
      const action = loadAnalytics(payload);
      const newState = analyticsReducer(state, action);
      expect(newState.galleryCats).toBe(25);
      expect(newState.breedsViewed['Persian']).toBeUndefined();
      expect(newState.breedsViewed['Siamese']).toBe(8);
      expect(newState.breedsViewed['Bengal']).toBe(3);
    });
  });
});
