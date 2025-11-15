import type { Breed, Cat } from '../types';
import api from './api';
import endpoints from './endpoints';

import C from './constants';

const fetchRandomCats = async (
  limit: number = C.DEFAULT_CATS_LIMIT
): Promise<Cat[]> => {
  const response = await api.get<Cat[]>(endpoints.IMAGES, {
    params: {
      limit,
      has_breeds: true,
    },
  });
  return response.data;
};

const fetchCatImageById = async (imageId: string): Promise<Cat> => {
  const response = await api.get<Cat>(endpoints.IMAGE_BY_ID(imageId));
  return response.data;
};

const fetchAllBreeds = async (): Promise<Breed[]> => {
  const response = await api.get<Breed[]>(endpoints.BREEDS);
  return response.data;
};

const fetchImagesByBreed = async (
  breedId: string,
  limit: number = C.DEFAULT_CATS_LIMIT
): Promise<Cat[]> => {
  const response = await api.get<Cat[]>(endpoints.IMAGES, {
    params: {
      breed_ids: breedId,
      limit,
    },
  });
  return response.data;
};

export {
  fetchAllBreeds,
  fetchCatImageById,
  fetchImagesByBreed,
  fetchRandomCats,
};
