import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useBreeds from './useBreeds';
import { Card, ErrorMessage, LoadingSpinner } from '../../components';

import U from './utils';
import C from './constants';
import layoutStyles from '../shared/viewsLayout.module.css';

const Breeds = () => {
  const { cachedBreeds, areBreedsEmpty, isInitialLoading, error, loadBreeds } =
    useBreeds();

  useEffect(() => {
    if (areBreedsEmpty) {
      loadBreeds();
    }
  }, []);

  if (isInitialLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={layoutStyles.container}>
      <h1 className={layoutStyles.title}>{C.TITLE_TEXT}</h1>
      <div className={layoutStyles.grid}>
        {cachedBreeds.map((breed) => (
          <Card
            key={breed.id}
            cat={U.transformBreedToCatObject(breed)}
            isFavourite={false}
            isBreed
          />
        ))}
      </div>
      {error && <ErrorMessage message={error} />}
      <Outlet />
    </div>
  );
};

export default Breeds;
