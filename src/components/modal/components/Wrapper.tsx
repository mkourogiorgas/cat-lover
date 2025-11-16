import styles from '../Modal.module.css';

type WrapperProps = {
  onBackdropClick: (e: React.MouseEvent) => void;
  onClose: () => void;
  children: React.ReactNode;
};

const Wrapper = ({ onBackdropClick, onClose, children }: WrapperProps) => (
  <div className={styles.overlay} onClick={onBackdropClick}>
    <div className={styles.modal}>
      <button className={styles.closeButton} onClick={onClose}>
        ✕
      </button>
      {children}
    </div>
  </div>
);

export default Wrapper;
