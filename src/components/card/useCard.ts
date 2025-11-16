import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import U from './utils';
import type { Cat } from '../../types';

type UseCardProps = {
  cat: Cat;
  isBreed: boolean;
};

const useCard = ({ cat, isBreed }: UseCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const hasBreeds: boolean = !!cat.breeds?.length;
  const breedId: string = cat.breeds?.[0]?.id ?? '';
  const breedText: string = hasBreeds ? U.formatBreedNames(cat.breeds!) : '';

  const handleCardClick = () => {
    if (isBreed && breedId) {
      navigate(`/breeds/${breedId}`);
    } else {
      const basePath = location.pathname.startsWith('/favourites')
        ? '/favourites'
        : '';
      navigate(`${basePath}/cat/${cat.id}`);
    }
  };

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  return {
    breedText,
    isLoaded,
    handleCardClick,
    handleImageLoaded,
  };
};

export default useCard;
