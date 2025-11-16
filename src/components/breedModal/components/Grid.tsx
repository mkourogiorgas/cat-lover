import { Link } from 'react-router-dom';

import C from '../constants';
import styles from '../BreedModal.module.css';
import type { Cat } from '../../../types';

type BreedImageGridProps = {
  images: Cat[];
};

const BreedImageGrid = ({ images }: BreedImageGridProps) => {
  return (
    <div className={styles.imagesGrid}>
      {images.slice(0, C.MAX_IMAGES_TO_DISPLAY).map((image) => (
        <Link
          key={image.id}
          to={`/breeds/cat/${image.id}`}
          className={styles.imageCard}
        >
          <img
            src={image.url}
            alt={`Cat image ${image.id}`}
            className={styles.gridImage}
          />
        </Link>
      ))}
    </div>
  );
};

export default BreedImageGrid;
