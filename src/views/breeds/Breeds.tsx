import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useBreeds from './useBreeds';
import { Card, ErrorMessage, LoadingSpinner } from '../../components';
import U from './utils';
import C from './constants';
import styles from './breeds.module.css';

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
    <div className={styles.container}>
      <h1 className={styles.title}>{C.TITLE_TEXT}</h1>
      <div className={styles.grid}>
        {cachedBreeds.map((breed) => (
          <Card
            key={breed.id}
            cat={U.transformBreedToCatObject(breed)}
            isFavourite={false}
            hasTitle
          />
        ))}
      </div>
      {error && <ErrorMessage message={error} />}
      <Outlet />
    </div>
  );
};

export default Breeds;
