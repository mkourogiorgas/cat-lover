import C from '../constants';
import styles from '../Modal.module.css';

type ModalImageProps = {
  imageUrl: string;
};

const ModalImage = ({ imageUrl }: ModalImageProps) => (
  <div className={styles.imageContainer}>
    <img src={imageUrl} alt={C.CAT_IMAGE} className={styles.image} />
  </div>
);

export default ModalImage;
