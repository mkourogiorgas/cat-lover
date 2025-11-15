import { useCallback, useState } from 'react';

import { fetchAllBreeds } from '../../api';
import { breedsActions } from '../../store/breedsSlice';
import {
  selectBreeds,
  useCatsDispatch,
  useCatsSelector,
} from '../../store/hooks';

import C from './constants';
import type { Breed } from '../../types';

const useBreeds = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useCatsDispatch();
  const cachedBreeds: Breed[] = Object.values(useCatsSelector(selectBreeds));

  const areBreedsEmpty: boolean = cachedBreeds.length === 0;
  const isInitialLoading: boolean = areBreedsEmpty && isLoading;

  const loadBreeds = useCallback(() => {
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
  }, [dispatch]);

  return {
    cachedBreeds,
    areBreedsEmpty,
    isInitialLoading,
    error,
    loadBreeds,
  };
};

export default useBreeds;
