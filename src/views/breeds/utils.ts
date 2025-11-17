import C from './constants';
import type { Breed, Cat } from '../../types';

const transformBreedToCatObject = (breed: Breed): Cat => {
  return {
    ...breed.image,
    breeds: [breed],
  };
};

const shouldFetchBreeds = (
  isDataEmpty: boolean,
  lastFetched: number | null
): boolean => {
  if (isDataEmpty) return true;
  if (!lastFetched) return true;

  const now = Date.now();
  const daysSinceLastFetch = (now - lastFetched) / C.ONE_DAY_MS;
  return daysSinceLastFetch >= 1;
};

export default { shouldFetchBreeds, transformBreedToCatObject };
