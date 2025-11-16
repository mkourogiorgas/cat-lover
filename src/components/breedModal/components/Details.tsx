import U from '../utils';
import styles from '../BreedModal.module.css';
import type { Breed } from '../../../types';

type DetailsProps = {
  breed: Breed;
};

const Details = ({ breed }: DetailsProps) => (
  <div className={styles.breedDetails}>
    <div className={styles.breedHeader}>
      <h2 className={styles.breedName}>{breed.name}</h2>
      <p className={styles.breedOrigin}>{breed.origin}</p>
    </div>
    <p className={styles.breedDescription}>{breed.description}</p>
    <div className={styles.detailsGrid}>
      {U.detailsData(breed).map(([label, value]) => (
        <div key={label} className={styles.detailItem}>
          <strong>{label}</strong>
          <span>{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Details;
