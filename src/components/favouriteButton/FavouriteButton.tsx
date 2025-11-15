import useFavouriteButton from './useFavouriteButton';

import type { Cat } from '../../types';
import FavouriteButtonImage from './FavouriteButtonImage';

type FavouriteButtonProps = {
  cat: Cat;
  isFavourite: boolean;
  variant: 'compact' | 'expanded';
};

const FavouriteButton = ({
  cat,
  isFavourite,
  variant,
}: FavouriteButtonProps) => {
  const { text, buttonClass, fillColor, showText, handleFavouriteToggle } =
    useFavouriteButton({ cat, isFavourite, variant });

  return (
    <button
      className={buttonClass}
      onClick={handleFavouriteToggle}
      aria-label={text}
    >
      <FavouriteButtonImage fillColor={fillColor} />
      {showText && <span>{text}</span>}
    </button>
  );
};

export default FavouriteButton;
