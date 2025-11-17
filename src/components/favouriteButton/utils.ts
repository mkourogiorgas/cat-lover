import C from './constants';
import styles from './FavouriteButton.module.css';

const getFillColor = (isCompact: boolean, isFavourite: boolean): string => {
  if (!isFavourite) return 'none';
  return isCompact ? C.HEART_FILL_COMPACT : C.HEART_FILL_EXPANDED;
};

const getStrokeColor = (isCompact: boolean): string => {
  return isCompact ? C.HEART_STROKE_COMPACT : C.HEART_STROKE_EXPANDED;
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
  getFillColor,
  getStrokeColor,
  getButtonClassName,
  getButtonText,
};

export default U;
