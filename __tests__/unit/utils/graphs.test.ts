import { describe, expect,it } from 'vitest';

import U from '../../../src/views/analytics/utils';

const { formatStats, formatBarStats, formatPieChartData } = U;

describe('Analytics Stats', () => {
  describe('formatStats', () => {
    it('should format stats with correct structure', () => {
      const result = formatStats(50, 25, '50.0');
      expect(result).toHaveLength(3);
      expect(result[0]).toMatchObject({
        label: expect.any(String),
        value: expect.any(Number),
        color: expect.any(String),
      });
    });

    it('should include total images viewed stat', () => {
      const result = formatStats(100, 25, '25.0');
      expect(result[0].value).toBe(100);
    });

    it('should include total favourites stat', () => {
      const result = formatStats(100, 25, '25.0');
      expect(result[1].value).toBe(25);
    });

    it('should include favourite rate stat', () => {
      const result = formatStats(100, 25, '25.0');
      expect(result[2].value).toBe('25.0%');
    });

    it('should handle zero values', () => {
      const result = formatStats(0, 0, '0');
      expect(result[0].value).toBe(0);
      expect(result[1].value).toBe(0);
      expect(result[2].value).toBe('0%');
    });

    it('should handle high values', () => {
      const result = formatStats(10000, 5000, '50.0');
      expect(result[0].value).toBe(10000);
      expect(result[1].value).toBe(5000);
    });
  });

  describe('formatBarStats', () => {
    it('should format bar stats with correct structure', () => {
      const result = formatBarStats(100, 25);
      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        name: expect.any(String),
        Views: expect.any(Number),
        Favourites: expect.any(Number),
      });
    });

    it('should include views count', () => {
      const result = formatBarStats(150, 50);
      expect(result[0].Views).toBe(150);
    });

    it('should include favourites count', () => {
      const result = formatBarStats(150, 50);
      expect(result[0].Favourites).toBe(50);
    });

    it('should have name property for chart', () => {
      const result = formatBarStats(100, 25);
      expect(result[0].name).toBe('Total');
    });

    it('should handle zero values', () => {
      const result = formatBarStats(0, 0);
      expect(result[0].Views).toBe(0);
      expect(result[0].Favourites).toBe(0);
    });
  });

  describe('formatPieChartData', () => {
    it('should return empty array when breedsViewed is undefined', () => {
      const result = formatPieChartData(undefined);
      expect(result).toEqual([]);
    });

    it('should return empty array when breedsViewed is empty', () => {
      const result = formatPieChartData({});
      expect(result).toEqual([]);
    });

    it('should format single breed correctly', () => {
      const breedsViewed = { Siamese: 5 };
      const result = formatPieChartData(breedsViewed);

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        name: 'Siamese',
        value: 5,
      });
    });

    it('should format multiple breeds correctly', () => {
      const breedsViewed = {
        Siamese: 10,
        Persian: 8,
        'Maine Coon': 6,
      };
      const result = formatPieChartData(breedsViewed);

      expect(result).toHaveLength(3);
    });

    it('should sort breeds by view count (descending)', () => {
      const breedsViewed = {
        Siamese: 5,
        Persian: 15,
        'Maine Coon': 10,
      };
      const result = formatPieChartData(breedsViewed);

      expect(result[0].name).toBe('Persian');
      expect(result[0].value).toBe(15);
      expect(result[1].name).toBe('Maine Coon');
      expect(result[2].name).toBe('Siamese');
    });

    it('should limit to top 6 breeds', () => {
      const breedsViewed = {
        Breed1: 10,
        Breed2: 9,
        Breed3: 8,
        Breed4: 7,
        Breed5: 6,
        Breed6: 5,
        Breed7: 4,
        Breed8: 3,
      };
      const result = formatPieChartData(breedsViewed);

      expect(result).toHaveLength(6);
      expect(result[result.length - 1].name).toBe('Breed6');
    });

    it('should handle breeds with same view count', () => {
      const breedsViewed = {
        Siamese: 10,
        Persian: 10,
        'Maine Coon': 10,
      };
      const result = formatPieChartData(breedsViewed);

      expect(result).toHaveLength(3);
      expect(result.every((item: { value: number }) => item.value === 10)).toBe(
        true
      );
    });
  });
});
