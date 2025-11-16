import C from './constants';
import type { Breed,Cat } from '../../types';

const getImagePosition = (cat: Cat): string => {
  const imageRatio = cat.height / cat.width;
  if (imageRatio > C.HIGH_IMAGE_RATIO_THRESHOLD) return 'center 15%';
  if (imageRatio > C.MEDIUM_IMAGE_RATIO_THRESHOLD) return 'center 25%';
  return 'center';
};

const formatBreedNames = (breeds: Breed[]): string => {
  return breeds.map((breed) => breed.name).join(' - ');
};

export default {
  formatBreedNames,
  getImagePosition,
};
