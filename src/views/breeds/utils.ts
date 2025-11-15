import type { Breed, Cat } from '../../types';

const transformBreedToCatObject = (breed: Breed): Cat => {
  return {
    ...breed.image,
    breeds: [breed],
  };
};

export default { transformBreedToCatObject };
