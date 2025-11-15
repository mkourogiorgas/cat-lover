import { useState } from 'react';

import C from './constants';
import type { Breed, Cat } from '../../types';

type UseCardProps = {
  cat: Cat;
};

const useCard = ({ cat }: UseCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const getImagePosition = () => {
    const imageRatio = cat.height / cat.width;
    if (imageRatio > C.HIGH_IMAGE_RATIO_THRESHOLD) return 'center 15%';
    if (imageRatio > C.MEDIUM_IMAGE_RATIO_THRESHOLD) return 'center 25%';
    return 'center';
  };

  const formatBreedNames = (breeds: Breed[]): string => {
    return breeds.map((breed) => breed.name).join(' - ');
  };

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  const hasBreeds = !!cat.breeds?.length;

  const breedText = hasBreeds ? formatBreedNames(cat.breeds!) : '';

  return {
    breedText,
    isLoaded,
    getImagePosition,
    handleImageLoaded,
  };
};

export default useCard;
