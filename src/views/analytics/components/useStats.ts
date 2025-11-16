import { useMemo } from 'react';
import {
  selectAnalytics,
  selectFavourites,
  useCatsSelector,
} from '../../../store/hooks';

import U from '../utils';

const useStats = () => {
  const analytics = useCatsSelector(selectAnalytics);
  const favourites = useCatsSelector(selectFavourites);

  const totalImagesViewed: number = analytics?.galleryCats || 0;
  const breedsViewed = analytics?.breedsViewed;
  const totalFavourites: number = favourites
    ? Object.keys(favourites).length
    : 0;

  const favoriteRate = useMemo((): string => {
    if (totalImagesViewed === 0) return '0';
    return ((totalFavourites / totalImagesViewed) * 100).toFixed(2);
  }, [totalImagesViewed, totalFavourites]);

  const stats = useMemo(
    () => U.formatStats(totalImagesViewed, totalFavourites, favoriteRate),
    [totalImagesViewed, totalFavourites, favoriteRate]
  );

  const barStats = useMemo(
    () => U.formatBarStats(totalImagesViewed, totalFavourites),
    [totalImagesViewed, totalFavourites]
  );

  const pieChartData = useMemo(
    () => U.formatPieChartData(breedsViewed),
    [analytics]
  );

  return { barStats, stats, pieChartData };
};

export default useStats;
