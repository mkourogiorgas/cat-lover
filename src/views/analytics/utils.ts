import C from './constants';

type StatItem = {
  label: string;
  value: number | string;
  color: string;
};

type BarChartItem = {
  name: string;
  Views: number;
  Favourites: number;
};

type PieChartItem = {
  name: string;
  value: number;
};

const formatStats = (
  totalImagesViewed: number,
  totalFavourites: number,
  favoriteRate: string
): StatItem[] => {
  return [
    {
      label: C.TOTAL_IMAGES_VIEWED,
      value: totalImagesViewed,
      color: C.CARD_COLOR_1,
    },
    {
      label: C.TOTAL_FAVOURITES,
      value: totalFavourites,
      color: C.CARD_COLOR_2,
    },
    {
      label: C.FAVOURITES_RATE,
      value: `${favoriteRate}%`,
      color: C.CARD_COLOR_3,
    },
  ];
};

const formatBarStats = (
  totalImagesViewed: number,
  totalFavourites: number
): BarChartItem[] => {
  return [
    {
      name: C.TOTAL,
      Views: totalImagesViewed,
      Favourites: totalFavourites,
    },
  ];
};

const getPieLabelText = (
  name: string | undefined,
  percent: number | undefined
): string => `${name} ${((percent || 0) * 100).toFixed(2)}%`;

const getPieFillColor = (index: number): string =>
  C.PIE_CHART_COLORS[index % C.PIE_CHART_COLORS.length];

const formatPieChartData = (
  breedsViewed?: Record<string, number>
): PieChartItem[] => {
  if (!breedsViewed) return [];
  return Object.entries(breedsViewed)
    .map(([breedName, count]) => ({
      name: breedName,
      value: count as number,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, C.MAX_BREEDS_DISPLAYED);
};

export default {
  formatBarStats,
  formatStats,
  getPieLabelText,
  getPieFillColor,
  formatPieChartData,
};
