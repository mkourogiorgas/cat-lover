import { Outlet } from 'react-router-dom';
import Card from '../../components/card';
import C from './constants';
import styles from './favourites.module.css';
import useFavourites from './useFavourites';

const Favourites = () => {
  const { favouriteCats, isFavouritesEmpty } = useFavourites();

  if (isFavouritesEmpty) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{C.TITLE_TEXT}</h1>
        <p className={styles.emptyMessage}>{C.EMPTY_MESSAGE}</p>
        <Outlet />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{C.TITLE_TEXT}</h1>
      <div className={styles.grid}>
        {favouriteCats.map((cat) => (
          <Card cat={cat} isFavourite hasTitle={false} key={cat.id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Favourites;
