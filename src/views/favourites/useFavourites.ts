import { selectFavourites, useCatsSelector } from '../../store/hooks';

import type { Cat } from '../../types';

const useFavourites = () => {
  const favouriteCats: Cat[] = Object.values(useCatsSelector(selectFavourites));
  const isFavouritesEmpty: boolean = favouriteCats.length === 0;

  return {
    favouriteCats,
    isFavouritesEmpty,
  };
};

export default useFavourites;
