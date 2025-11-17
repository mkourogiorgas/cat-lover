import { describe, it, expect } from 'vitest';
import breedsReducer, {
  breedsActions,
  type BreedsStateWithMeta,
} from '../../../src/store/breedsSlice';
import type { Breed } from '../../../src/types';

const { addBreeds, clearBreeds, loadBreeds } = breedsActions;

const mockBreed: Breed = {
  id: 'bengal',
  name: 'Bengal',
  temperament: 'Alert, Agile, Active',
  origin: 'United States',
  description: 'The Bengal is a leopard cat hybrid',
  life_span: '10 - 16',
  affection_level: 4,
  child_friendly: 3,
  dog_friendly: 3,
  weight: {
    imperial: '8 - 15',
    metric: '4 - 7',
  },
  image: {
    id: 'img1',
    url: 'http://example.com/cat.png',
    width: 400,
    height: 300,
  },
};

describe('breedsSlice', () => {
  const initialState: BreedsStateWithMeta = {
    data: {},
    lastFetched: null,
  };

  describe('addBreeds', () => {
    it('should add a single breed', () => {
      const state: BreedsStateWithMeta = { ...initialState };
      const action = addBreeds([mockBreed]);
      const newState = breedsReducer(state, action);
      expect(newState.data['bengal']).toBe(mockBreed);
    });

    it('should add multiple breeds', () => {
      const state: BreedsStateWithMeta = { ...initialState };
      const siamese: Breed = { ...mockBreed, id: 'siamese', name: 'Siamese' };
      const persian: Breed = { ...mockBreed, id: 'persian', name: 'Persian' };
      const action = addBreeds([mockBreed, siamese, persian]);
      const newState = breedsReducer(state, action);
      expect(Object.keys(newState.data)).toHaveLength(3);
      expect(newState.data['bengal']).toBe(mockBreed);
      expect(newState.data['siamese']).toBe(siamese);
      expect(newState.data['persian']).toBe(persian);
    });

    it('should update existing breed when adding duplicate id', () => {
      const state: BreedsStateWithMeta = {
        data: { bengal: mockBreed },
        lastFetched: Date.now(),
      };
      const updatedBreed: Breed = { ...mockBreed, temperament: 'Updated' };
      const action = addBreeds([updatedBreed]);
      const newState = breedsReducer(state, action);
      expect(newState.data['bengal'].temperament).toBe('Updated');
    });

    it('should preserve existing breeds when adding new ones', () => {
      const siamese: Breed = { ...mockBreed, id: 'siamese', name: 'Siamese' };
      const state: BreedsStateWithMeta = {
        data: { siamese: siamese },
        lastFetched: Date.now(),
      };
      const action = addBreeds([mockBreed]);
      const newState = breedsReducer(state, action);
      expect(Object.keys(newState.data)).toHaveLength(2);
      expect(newState.data['bengal']).toBe(mockBreed);
      expect(newState.data['siamese']).toBe(siamese);
    });

    it('should handle empty breed array', () => {
      const state: BreedsStateWithMeta = {
        data: { bengal: mockBreed },
        lastFetched: Date.now(),
      };
      const action = addBreeds([]);
      const newState = breedsReducer(state, action);
      expect(newState.data['bengal']).toBe(mockBreed);
    });

    it('should update lastFetched if 24 hours passed', () => {
      const ONE_DAY_MS = 24 * 60 * 60 * 1000;
      const oldTimestamp = Date.now() - ONE_DAY_MS - 1000;
      const state: BreedsStateWithMeta = {
        data: {},
        lastFetched: oldTimestamp,
      };
      const action = addBreeds([mockBreed]);
      const newState = breedsReducer(state, action);
      expect(newState.lastFetched).toBeGreaterThan(oldTimestamp);
    });
  });

  describe('clearBreeds', () => {
    it('should clear all breeds', () => {
      const state: BreedsStateWithMeta = {
        data: {
          bengal: mockBreed,
          siamese: { ...mockBreed, id: 'siamese' },
        },
        lastFetched: Date.now(),
      };
      const action = clearBreeds();
      const newState = breedsReducer(state, action);
      expect(newState).toEqual(initialState);
    });

    it('should work on empty state', () => {
      const state: BreedsStateWithMeta = { ...initialState };
      const action = clearBreeds();
      const newState = breedsReducer(state, action);
      expect(newState).toEqual(initialState);
    });
  });

  describe('loadBreeds', () => {
    it('should load breeds from payload', () => {
      const state: BreedsStateWithMeta = { ...initialState };
      const payload: BreedsStateWithMeta = {
        data: { bengal: mockBreed },
        lastFetched: Date.now(),
      };
      const action = loadBreeds(payload);
      const newState = breedsReducer(state, action);
      expect(newState.data['bengal']).toBe(mockBreed);
    });

    it('should replace existing breeds', () => {
      const state: BreedsStateWithMeta = {
        data: { bengal: mockBreed },
        lastFetched: Date.now(),
      };
      const siamese: Breed = { ...mockBreed, id: 'siamese', name: 'Siamese' };
      const payload: BreedsStateWithMeta = {
        data: { siamese: siamese },
        lastFetched: Date.now(),
      };
      const action = loadBreeds(payload);
      const newState = breedsReducer(state, action);
      expect(newState.data['bengal']).toBeUndefined();
      expect(newState.data['siamese']).toBe(siamese);
    });

    it('should load multiple breeds at once', () => {
      const state: BreedsStateWithMeta = { ...initialState };
      const siamese: Breed = { ...mockBreed, id: 'siamese', name: 'Siamese' };
      const persian: Breed = { ...mockBreed, id: 'persian', name: 'Persian' };
      const payload: BreedsStateWithMeta = {
        data: {
          bengal: mockBreed,
          siamese: siamese,
          persian: persian,
        },
        lastFetched: Date.now(),
      };
      const action = loadBreeds(payload);
      const newState = breedsReducer(state, action);
      expect(Object.keys(newState.data)).toHaveLength(3);
    });

    it('should load empty state', () => {
      const state: BreedsStateWithMeta = {
        data: { bengal: mockBreed },
        lastFetched: Date.now(),
      };
      const payload: BreedsStateWithMeta = {
        data: {},
        lastFetched: null,
      };
      const action = loadBreeds(payload);
      const newState = breedsReducer(state, action);
      expect(newState).toEqual(payload);
    });
  });
});
