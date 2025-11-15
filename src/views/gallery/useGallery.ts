import { useCallback, useState } from 'react';

import { fetchRandomCats } from '../../api';
import { galleryActions } from '../../store/gallerySlice';
import { useCatsDispatch, useCatsSelector } from '../../store/hooks';
import { selectFavourites, selectGallery } from '../../store/hooks';

import C from './constants';
import type { Cat } from '../../types';

const useGallery = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useCatsDispatch();

  const cachedCats: Cat[] = Object.values(useCatsSelector(selectGallery));
  const favouriteCats: Record<string, Cat> = useCatsSelector(selectFavourites);

  const isGalleryEmpty = cachedCats.length === 0;
  const isInitialLoading = isLoading && isGalleryEmpty;

  const loadCats = useCallback(() => {
    setIsLoading(true);
    setError(null);

    fetchRandomCats(C.NUMBER_OF_CATS_TO_BE_FETCHED)
      .then((newCats) => {
        const existingIds = new Set(cachedCats.map((cat) => cat.id));
        const uniqueNewCats = newCats.filter((cat) => !existingIds.has(cat.id));

        if (uniqueNewCats.length) {
          dispatch(galleryActions.addCats(uniqueNewCats));
        }
      })
      .catch((error) => {
        setError(C.ERROR_MESSAGE);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [cachedCats, dispatch]);

  const clearCats = useCallback(() => {
    dispatch(galleryActions.clearCats());
  }, [dispatch]);

  return {
    cachedCats,
    favouriteCats,
    isInitialLoading,
    isLoading,
    isGalleryEmpty,
    error,
    loadCats,
    clearCats,
  };
};

export default useGallery;
