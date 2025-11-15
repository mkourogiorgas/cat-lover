import C from './constants';
import styles from './FavouriteButton.module.css';

const getHeartFillColor = (
  isCompact: boolean,
  isFavourite: boolean
): string => {
  if (!isFavourite) return 'none';
  return isCompact ? C.HEART_FILL_COMPACT : C.HEART_FILL_EXPANDED;
};

const getButtonClassName = (
  isCompact: boolean,
  isFavourite: boolean
): string => {
  const baseClass = isCompact ? styles.compactButton : styles.expandedButton;
  return isFavourite ? `${baseClass} ${styles.active}` : baseClass;
};

const getButtonText = (isFavourite: boolean): string => {
  return isFavourite ? C.REMOVE_TEXT : C.ADD_TEXT;
};

const U = {
  getHeartFillColor,
  getButtonClassName,
  getButtonText,
};

export default U;
