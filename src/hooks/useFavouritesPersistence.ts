import { useEffect } from 'react';

import { favouritesActions } from '../store/favouritesSlice';
import {
  selectFavourites,
  useCatsDispatch,
  useCatsSelector,
} from '../store/hooks';
import C from './constants';

const useFavouritesPersistence = () => {
  const dispatch = useCatsDispatch();
  const favourites = useCatsSelector(selectFavourites);

  useEffect(() => {
    const savedData = localStorage.getItem(C.STORAGE_KEY_FAVOURITES);
    if (savedData) {
      Promise.resolve()
        .then(() => JSON.parse(savedData))
        .then((parsed) => {
          if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            dispatch(favouritesActions.loadFavourites(parsed));
          } else {
            console.warn(C.FAVOURITES_INVALID_FORMAT);
            localStorage.removeItem(C.STORAGE_KEY_FAVOURITES);
          }
        })
        .catch((error) => {
          console.error(C.FAVOURITES_LOAD_ERROR, error);
        });
    }
  }, [dispatch]);

  useEffect(() => {
    Promise.resolve()
      .then(() =>
        localStorage.setItem(
          C.STORAGE_KEY_FAVOURITES,
          JSON.stringify(favourites)
        )
      )
      .catch((error) => {
        console.error(C.FAVOURITES_SAVE_ERROR, error);
      });
  }, [favourites]);
};

export default useFavouritesPersistence;
