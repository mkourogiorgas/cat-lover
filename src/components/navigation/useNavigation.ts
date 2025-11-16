import { useLocation } from 'react-router-dom';

import C from './constants';

type UseNavigationState = {
  isGalleryActive: boolean;
  isBreedsActive: boolean;
  isFavouritesActive: boolean;
  isDemographicsActive: boolean;
};

const useNavigation = (): UseNavigationState => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === C.DEFAULT_PATH && location.pathname === C.DEFAULT_PATH)
      return true;
    if (path !== C.DEFAULT_PATH && location.pathname.startsWith(path))
      return true;
    return false;
  };

  const isGalleryActive =
    isActive(C.DEFAULT_PATH) || location.pathname.startsWith('/cat/');

  const isBreedsActive = isActive('/breeds');
  const isFavouritesActive = isActive(C.FAVOURITES_PATH);
  const isDemographicsActive = isActive(C.ANALYTICS_PATH);

  return {
    isGalleryActive,
    isBreedsActive,
    isFavouritesActive,
    isDemographicsActive,
  };
};

export default useNavigation;
