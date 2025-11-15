import C from './constants';
import styles from './gallery.module.css';

type GalleryButtonsProps = {
  isLoading: boolean;
  loadCats: () => void;
  clearCats: () => void;
};

const GalleryButtons = ({
  isLoading,
  loadCats,
  clearCats,
}: GalleryButtonsProps) => {
  return (
    <div className={styles.buttonRow}>
      <button
        onClick={loadCats}
        disabled={isLoading}
        className={styles.button}
        aria-label={C.LOAD_BUTTON_TEXT}
      >
        {isLoading && <span className={styles.spinner} />}
        {C.LOAD_BUTTON_TEXT}
      </button>
      <button
        onClick={clearCats}
        disabled={isLoading}
        className={styles.button}
        aria-label={C.CLEAR_BUTTON_TEXT}
      >
        {C.CLEAR_BUTTON_TEXT}
      </button>
    </div>
  );
};

export default GalleryButtons;
