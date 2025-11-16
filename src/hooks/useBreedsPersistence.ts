import { useEffect } from 'react';

import type { BreedsStateWithMeta } from '../store/breedsSlice';
import { breedsActions } from '../store/breedsSlice';
import {
  selectBreedsWithMeta,
  useCatsDispatch,
  useCatsSelector,
} from '../store/hooks';
import C from './constants';

const useBreedsPersistence = () => {
  const dispatch = useCatsDispatch();
  const breeds = useCatsSelector(selectBreedsWithMeta);

  useEffect(() => {
    const savedData = localStorage.getItem(C.STORAGE_KEY_BREEDS);
    if (savedData) {
      Promise.resolve()
        .then(() => JSON.parse(savedData) as BreedsStateWithMeta)
        .then((parsed) => {
          const now = Date.now();
          const isFresh =
            parsed.lastFetched && now - parsed.lastFetched < C.ONE_DAY_MS;

          if (isFresh && Object.keys(parsed.data).length > 0) {
            dispatch(breedsActions.loadBreeds(parsed));
          }
        })
        .catch((error) => {
          console.error(C.BREEDS_LOAD_ERROR, error);
        });
    }
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(breeds.data).length > 0) {
      Promise.resolve()
        .then(() =>
          localStorage.setItem(C.STORAGE_KEY_BREEDS, JSON.stringify(breeds))
        )
        .catch((error) => {
          console.error(C.BREEDS_SAVE_ERROR, error);
        });
    }
  }, [breeds]);
};

export default useBreedsPersistence;
