import CardImage from './CardImage';
import CardSkeleton from './CardSkeleton';
import useCard from './useCard';
import FavouriteButton from '../favouriteButton';

import U from './utils';
import styles from './Card.module.css';
import type { Cat } from '../../types';

type CardProps = {
  cat: Cat;
  isFavourite: boolean;
  isBreed: boolean;
};

const Card = ({ cat, isFavourite, isBreed }: CardProps) => {
  const { breedText, isLoaded, handleCardClick, handleImageLoaded } = useCard({
    cat,
    isBreed,
  });

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.imageContainer}>
        {!isLoaded && <CardSkeleton />}
        <CardImage
          cat={cat}
          imagePosition={U.getImagePosition(cat)}
          onLoad={handleImageLoaded}
        />
        {!isBreed && (
          <div className={styles.favouriteButtonWrapper}>
            <FavouriteButton
              cat={cat}
              isFavourite={isFavourite}
              variant="compact"
            />
          </div>
        )}
        {isBreed && breedText && (
          <div className={styles.breedName}>{breedText}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
