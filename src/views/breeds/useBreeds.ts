import { useCallback, useState } from 'react';

import { fetchAllBreeds } from '../../api';
import { breedsActions } from '../../store/breedsSlice';
import {
  selectBreeds,
  selectBreedsWithMeta,
  useCatsDispatch,
  useCatsSelector,
} from '../../store/hooks';

import U from './utils';
import C from './constants';
import type { Breed } from '../../types';

const useBreeds = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useCatsDispatch();
  const cachedBreeds: Breed[] = Object.values(useCatsSelector(selectBreeds));
  const breedsWithMeta = useCatsSelector(selectBreedsWithMeta);
  const lastFetched = breedsWithMeta?.lastFetched;

  const areBreedsEmpty: boolean = cachedBreeds.length === 0;
  const isInitialLoading: boolean = areBreedsEmpty && isLoading;
  const shouldFetch = U.shouldFetchBreeds(areBreedsEmpty, lastFetched);

  const loadBreeds = useCallback(() => {
    if (!shouldFetch) {
      return;
    }

    setIsLoading(true);
    setError(null);

    fetchAllBreeds()
      .then((breeds: Breed[]) => {
        dispatch(breedsActions.addBreeds(breeds));
      })
      .catch((error) => {
        setError(C.ERROR_MESSAGE);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, shouldFetch]);

  return {
    cachedBreeds,
    areBreedsEmpty,
    isInitialLoading,
    error,
    loadBreeds,
  };
};

export default useBreeds;
