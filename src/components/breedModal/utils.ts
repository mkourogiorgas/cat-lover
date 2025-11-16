import C from './constants';
import type { Breed } from '../../types';

const createStarRating = (rating: number): string => {
  return (
    C.STAR_FILLED.repeat(rating) + C.STAR_EMPTY.repeat(C.MAX_RATING - rating)
  );
};

const formatWeight = (breed: Breed): string => {
  return `${breed.weight.metric} ${C.WEIGHT_UNITS_KG} (${breed.weight.imperial} ${C.WEIGHT_UNITS_LBS})`;
};

const formatLifeSpan = (lifeSpan: string): string => {
  return `${lifeSpan} ${C.YEARS_SUFFIX}`;
};

const getImageAltText = (imageId: string): string => {
  return `Cat image ${imageId}`;
};

const detailsData = (breed: Breed): Array<[string, string]> => [
  [C.DETAIL_LABELS_TEMPERAMENT, breed.temperament],
  [C.DETAIL_LABELS_LIFE_SPAN, formatLifeSpan(breed.life_span)],
  [C.DETAIL_LABELS_WEIGHT, formatWeight(breed)],
  [C.DETAIL_LABELS_AFFECTION_LEVEL, createStarRating(breed.affection_level)],
  [C.DETAIL_LABELS_CHILD_FRIENDLY, createStarRating(breed.child_friendly)],
  [C.DETAIL_LABELS_DOG_FRIENDLY, createStarRating(breed.dog_friendly)],
];

export default {
  createStarRating,
  formatWeight,
  formatLifeSpan,
  getImageAltText,
  detailsData,
};
