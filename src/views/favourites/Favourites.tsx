import { Outlet } from 'react-router-dom';

import useFavourites from './useFavourites';
import Card from '../../components/card';

import C from './constants';
import layoutStyles from '../shared/viewsLayout.module.css';
import styles from './favourites.module.css';

const Favourites = () => {
  const { favouriteCats, isFavouritesEmpty } = useFavourites();

  if (isFavouritesEmpty) {
    return (
      <div className={layoutStyles.container}>
        <h1 className={layoutStyles.title}>{C.TITLE_TEXT}</h1>
        <p className={styles.emptyMessage}>{C.EMPTY_MESSAGE}</p>
        <Outlet />
      </div>
    );
  }

  return (
    <div className={layoutStyles.container}>
      <h1 className={layoutStyles.title}>{C.TITLE_TEXT}</h1>
      <div className={layoutStyles.grid}>
        {favouriteCats.map((cat) => (
          <Card cat={cat} isFavourite hasTitle={false} key={cat.id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Favourites;
