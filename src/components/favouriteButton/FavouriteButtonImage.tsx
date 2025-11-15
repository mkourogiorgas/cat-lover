import C from './constants';

type FavouriteButtonImageProps = {
  fillColor: string;
  stroke?: string;
};

const FavouriteButtonImage = ({
  fillColor,
  stroke = C.HEART_STROKE,
}: FavouriteButtonImageProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fillColor}
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export default FavouriteButtonImage;
