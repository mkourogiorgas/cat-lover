import { useEffect } from 'react';

import { analyticsActions } from '../store/analyticsSlice';
import {
  selectAnalytics,
  useCatsDispatch,
  useCatsSelector,
} from '../store/hooks';

import C from './constants';

const useAnalyticsPersistence = () => {
  const dispatch = useCatsDispatch();
  const analytics = useCatsSelector(selectAnalytics);

  useEffect(() => {
    const savedData = localStorage.getItem(C.STORAGE_KEY_ANALYTICS);
    if (savedData) {
      Promise.resolve()
        .then(() => JSON.parse(savedData))
        .then((parsed) => {
          const validatedData = {
            galleryCats: parsed.galleryCats || 0,
            breedsViewed: parsed.breedsViewed || {},
          };
          dispatch(analyticsActions.loadAnalytics(validatedData));
        })
        .catch((error) => {
          console.error(C.ANALYTICS_LOAD_ERROR, error);
        });
    }
  }, [dispatch]);

  useEffect(() => {
    Promise.resolve()
      .then(() =>
        localStorage.setItem(C.STORAGE_KEY_ANALYTICS, JSON.stringify(analytics))
      )
      .catch((error) => {
        console.error(C.ANALYTICS_SAVE_ERROR, error);
      });
  }, [analytics]);
};

export default useAnalyticsPersistence;
