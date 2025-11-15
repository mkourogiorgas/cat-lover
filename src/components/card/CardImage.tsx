import type { Cat } from '../../types';

import styles from './Card.module.css';

type CardImageProps = {
  cat: Cat;
  imagePosition: string;
  onLoad: () => void;
};

const CardImage = ({ cat, imagePosition, onLoad }: CardImageProps) => (
  <img
    src={cat.url}
    alt={cat.id}
    className={styles.image}
    style={{
      objectPosition: imagePosition,
    }}
    onLoad={onLoad}
  />
);

export default CardImage;
