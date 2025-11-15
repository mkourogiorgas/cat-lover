import { favouritesActions } from '../../store/favouritesSlice';
import { useCatsDispatch } from '../../store/hooks';

import U from './utils';
import type { Cat } from '../../types';

type UseFavouriteButtonProps = {
  cat: Cat;
  isFavourite: boolean;
  variant: 'compact' | 'expanded';
};

const useFavouriteButton = ({
  cat,
  isFavourite,
  variant,
}: UseFavouriteButtonProps) => {
  const dispatch = useCatsDispatch();

  const handleFavouriteToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(favouritesActions.toggleFavourite(cat));
  };

  const isCompact = variant === 'compact';
  const text = U.getButtonText(isFavourite);
  const fillColor = U.getHeartFillColor(isCompact, isFavourite);
  const buttonClass = U.getButtonClassName(isCompact, isFavourite);

  return {
    text,
    buttonClass,
    fillColor,
    showText: !isCompact,
    handleFavouriteToggle,
  };
};

export default useFavouriteButton;
