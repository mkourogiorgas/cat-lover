import { describe, expect,it } from 'vitest';

import U from '../../../src/views/breeds/utils';

describe('breeds utils fetch', () => {
  describe('shouldFetchBreeds', () => {
    it('should return true when data is empty', () => {
      const result = U.shouldFetchBreeds(true, null);
      expect(result).toBe(true);
    });

    it('should return true when lastFetched is null', () => {
      const result = U.shouldFetchBreeds(false, null);
      expect(result).toBe(true);
    });

    it('should return false when cache is newer than 24 hours ago', () => {
      const oneHourAgo = Date.now() - 60 * 60 * 1000;
      const result = U.shouldFetchBreeds(false, oneHourAgo);
      expect(result).toBe(false);
    });

    it('should return true when cache is older than 1 day', () => {
      const twentyFiveHoursAgo = Date.now() - 25 * 60 * 60 * 1000;
      const result = U.shouldFetchBreeds(false, twentyFiveHoursAgo);
      expect(result).toBe(true);
    });

    it('should return true when cache is exactly 1 day old', () => {
      const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
      const result = U.shouldFetchBreeds(false, oneDayAgo);
      expect(result).toBe(true);
    });

    it('should handle empty data and old cache', () => {
      const oldTimestamp = Date.now() - 48 * 60 * 60 * 1000;
      const result = U.shouldFetchBreeds(true, oldTimestamp);
      expect(result).toBe(true);
    });
  });
});
