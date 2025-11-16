import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import GalleryButtons from './GalleryButtons';
import useGallery from './useGallery';
import { Card } from '../../components';
import { ErrorMessage, LoadingSpinner } from '../../components';

import C from './constants';
import layoutStyles from '../shared/viewsLayout.module.css';

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
    <div className={layoutStyles.container}>
      <h1 className={layoutStyles.title}>{C.TITLE_TEXT}</h1>
      <div className={layoutStyles.grid}>
        {cachedCats.map((cat) => (
          <Card
            cat={cat}
            isFavourite={!!favouriteCats[cat.id]}
            isBreed={false}
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
