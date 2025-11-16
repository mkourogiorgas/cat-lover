import type { Breed, Cat } from '../types';

export type FavouritesState = Record<string, Cat>;

export type CatsState = Record<string, Cat>;

export type BreedsState = Record<string, Breed>;

export type BreedsViewed = {
  [breedName: string]: number;
};

export type AnalyticsState = {
  galleryCats: number;
  breedsViewed: BreedsViewed;
};
