import C from '../constants';
import styles from '../Modal.module.css';
import type { Breed } from '../../../types';

type DetailsProps = {
  breed: Breed | null;
};

const Details = ({ breed }: DetailsProps) => {
  if (!breed) {
    return <p className={styles.noBreed}>{C.NO_BREED_TEXT}</p>;
  }

  return (
    <div className={styles.breedInfo}>
      <h2 className={styles.breedName}>{breed.name}</h2>
      <p className={styles.breedDescription}>{breed.description}</p>

      <div className={styles.breedDetails}>
        <div className={styles.detailItem}>
          <strong>{C.DETAIL_LABELS_ORIGIN}:</strong> {breed.origin}
        </div>
        <div className={styles.detailItem}>
          <strong>{C.DETAIL_LABELS_TEMPERAMENT}:</strong> {breed.temperament}
        </div>
        <div className={styles.detailItem}>
          <strong>{C.DETAIL_LABELS_LIFE_SPAN}:</strong> {breed.life_span}{' '}
          {C.YEARS_SUFFIX}
        </div>
      </div>
    </div>
  );
};

export default Details;
