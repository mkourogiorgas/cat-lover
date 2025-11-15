import C from './constants';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner} aria-label={C.LOADING_TEXT} />
      <p className={styles.loadingMessage}>{C.LOADING_TEXT}</p>
    </div>
  );
};

export default LoadingSpinner;
