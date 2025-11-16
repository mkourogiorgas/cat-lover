import { Details, Image, Link, Wrapper } from './components';
import useModal from './useModal';
import FavouriteButton from '../favouriteButton';

import U from './utils';
import C from './constants';
import styles from './Modal.module.css';

const Modal = () => {
  const {
    image,
    isLoading,
    error,
    isFavourite,
    breedLinkPath,
    handleClose,
    handleBackdropClick,
  } = useModal();

  const renderContent = () => {
    if (isLoading) {
      return <div className={styles.loading}>{C.LOADING_TEXT}</div>;
    }

    if (error || !image) {
      return <div className={styles.error}>{error || C.NOT_FOUND_TEXT}</div>;
    }

    const breed = U.getBreedInfo(image);

    return (
      <>
        <Image imageUrl={image.url} />
        <div className={styles.content}>
          <div className={styles.favouriteButtonContainer}>
            <FavouriteButton
              isFavourite={isFavourite}
              cat={image}
              variant="expanded"
            />
          </div>
          <Details breed={breed} />
          <Link breed={breed} breedLinkPath={breedLinkPath} />
        </div>
      </>
    );
  };

  return (
    <Wrapper onBackdropClick={handleBackdropClick} onClose={handleClose}>
      {renderContent()}
    </Wrapper>
  );
};

export default Modal;
