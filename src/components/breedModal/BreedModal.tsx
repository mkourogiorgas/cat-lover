import { useEffect } from 'react';

import { Details, Grid, Wrapper } from './components';
import useBreedModal from './useBreedModal';

import C from './constants';
import styles from './BreedModal.module.css';

const BreedModal = () => {
  const {
    breed,
    images,
    isLoading,
    error,
    loadBreedImages,
    handleBackdropClick,
    handleClose,
  } = useBreedModal();

  useEffect(() => {
    loadBreedImages();
  }, [loadBreedImages]);

  const renderContent = () => {
    if (isLoading) {
      return <div className={styles.loading}>{C.LOADING_TEXT}</div>;
    }

    if (error || !breed) {
      return <div className={styles.error}>{error || C.ERROR_TEXT}</div>;
    }

    return (
      <div className={styles.content}>
        <Details breed={breed} />

        {images.length > 0 && (
          <div className={styles.imagesSection}>
            <h3 className={styles.imagesSectionTitle}>
              {C.EXAMPLE_IMAGES_TITLE}
            </h3>
            <Grid images={images} />
          </div>
        )}
      </div>
    );
  };

  return (
    <Wrapper onBackdropClick={handleBackdropClick} onClose={handleClose}>
      {renderContent()}
    </Wrapper>
  );
};

export default BreedModal;
