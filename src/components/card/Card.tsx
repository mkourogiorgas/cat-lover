import useCard from './useCard';

import type { Cat } from '../../types';
import CardImage from './CardImage';
import CardSkeleton from './CardSkeleton';

import styles from './Card.module.css';

type CardProps = {
  cat: Cat;
  hasTitle: boolean;
};

const Card = ({ cat, hasTitle }: CardProps) => {
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
        {hasTitle && breedText && (
          <div className={styles.breedName}>{breedText}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
