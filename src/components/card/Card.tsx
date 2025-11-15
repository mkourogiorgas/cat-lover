import CardImage from './CardImage';
import CardSkeleton from './CardSkeleton';
import useCard from './useCard';
import FavouriteButton from '../favouriteButton';

import styles from './Card.module.css';
import type { Cat } from '../../types';

type CardProps = {
  cat: Cat;
  isFavourite: boolean;
  hasTitle: boolean;
};

const Card = ({ cat, isFavourite, hasTitle }: CardProps) => {
  const { breedText, isLoaded, getImagePosition, handleImageLoaded } = useCard({
    cat,
  });

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {!isLoaded && <CardSkeleton />}
        <CardImage
          cat={cat}
          imagePosition={getImagePosition()}
          onLoad={handleImageLoaded}
        />
        {!hasTitle && (
          <div className={styles.favouriteButtonWrapper}>
            <FavouriteButton
              cat={cat}
              isFavourite={isFavourite}
              variant="compact"
            />
          </div>
        )}
        {hasTitle && breedText && (
          <div className={styles.breedName}>{breedText}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
