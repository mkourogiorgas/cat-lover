import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import useGallery from './useGallery';

import { Card } from '../../components';
import GalleryButtons from './GalleryButtons';
import { ErrorMessage, LoadingSpinner } from '../../components';

import C from './constants';

import styles from './gallery.module.css';

const Gallery = () => {
  const {
    cachedCats,
    favouriteCats,
    isInitialLoading,
    isLoading,
    isGalleryEmpty,
    error,
    loadCats,
    clearCats,
  } = useGallery();

  useEffect(() => {
    if (isGalleryEmpty) {
      loadCats();
    }
  }, []);

  if (isInitialLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{C.TITLE_TEXT}</h1>
      <div className={styles.grid}>
        {cachedCats.map((cat) => (
          <Card
            cat={cat}
            isFavourite={!!favouriteCats[cat.id]}
            hasTitle={false}
            key={cat.id}
          />
        ))}
      </div>
      {error && <ErrorMessage message={error} />}
      <GalleryButtons
        isLoading={isLoading}
        loadCats={loadCats}
        clearCats={clearCats}
      />
      <Outlet />
    </div>
  );
};

export default Gallery;
