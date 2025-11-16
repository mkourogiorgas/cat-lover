import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { fetchCatImageById } from '../../api';
import {
  selectFavourites,
  selectGallery,
  useCatsSelector,
} from '../../store/hooks';

import U from './utils';
import C from './constants';
import type { Cat } from '../../types';

export const useModal = () => {
  const imageId = useParams<{ imageId: string }>().imageId || '';
  const navigate = useNavigate();
  const location = useLocation();

  const cachedCats: Record<string, Cat> = useCatsSelector(selectGallery);
  const favouriteCats: Record<string, Cat> = useCatsSelector(selectFavourites);
  const cachedCat: Cat = cachedCats?.[imageId];
  const isFavourite: boolean = !!favouriteCats[imageId];

  const [image, setImage] = useState<Cat | null>(cachedCat ?? null);
  const [isLoading, setIsLoading] = useState<boolean>(!cachedCat);
  const [error, setError] = useState<string | null>(null);

  const loadImage = useCallback(() => {
    if (!imageId || cachedCat) return;

    fetchCatImageById(imageId)
      .then((data: Cat) => {
        setImage(data);
        setError(null);
        setIsLoading(false);
      })
      .catch(() => {
        setError(C.ERROR_TEXT);
        setIsLoading(false);
      });
  }, [imageId, cachedCat]);

  const getBreedLinkPath = useCallback((): string => {
    const breed = U.getBreedInfo(image);
    if (!breed) return '';

    return U.calculateBreedLinkPath(breed.id, location.pathname);
  }, [image, location.pathname]);

  const handleClose = useCallback(() => {
    const parentPath = U.getParentPath(location.pathname);
    navigate(parentPath);
  }, [location.pathname, navigate]);

  const handleBackdropClick = useCallback(
    (event: React.MouseEvent) => {
      if (event.target === event.currentTarget) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  return {
    image,
    isLoading,
    error,
    isFavourite,
    breedLinkPath: getBreedLinkPath(),
    handleBackdropClick,
    handleClose,
  };
};

export default useModal;
