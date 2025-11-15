import { Link } from 'react-router-dom';

import useNavigation from './useNavigation';

import C from './constants';

import styles from './Navigation.module.css';

const Navigation = () => {
  const { isGalleryActive, isBreedsActive, isFavouritesActive } =
    useNavigation();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to={C.DEFAULT_PATH} className={styles.logo}>
          <img
            src={C.IMAGE_SOURCE}
            alt={C.IMAGE_ALT}
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>{C.TITLE}</span>
        </Link>

        <div className={styles.links}>
          <Link
            to={C.DEFAULT_PATH}
            className={`${styles.link} ${isGalleryActive ? styles.linkActive : ''}`}
          >
            {C.GALLERY}
          </Link>
          <Link
            to={C.BREEDS_PATH}
            className={`${styles.link} ${isBreedsActive ? styles.linkActive : ''}`}
          >
            {C.BREEDS}
          </Link>
          <Link
            to={C.FAVOURITES_PATH}
            className={`${styles.link} ${isFavouritesActive ? styles.linkActive : ''}`}
          >
            {C.FAVOURITES}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
