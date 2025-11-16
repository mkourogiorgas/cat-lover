const ANALYTICS_LOAD_ERROR = 'Failed to load analytics from localStorage';
const ANALYTICS_SAVE_ERROR = 'Failed to save analytics to localStorage';
const BREEDS_LOAD_ERROR = 'Failed to load breeds from localStorage';
const BREEDS_SAVE_ERROR = 'Failed to save breeds to localStorage';
const FAVOURITES_INVALID_FORMAT =
  'Invalid favourites data format, resetting to empty object';
const FAVOURITES_LOAD_ERROR = 'Failed to load favourites from localStorage';
const FAVOURITES_SAVE_ERROR = 'Failed to save favourites to localStorage';

const STORAGE_KEY_ANALYTICS = 'cat-lover-analytics';
const STORAGE_KEY_BREEDS = 'cat-lover-breeds';
const STORAGE_KEY_FAVOURITES = 'cat_app_favourites';

const ONE_DAY_MS = 1000 * 60 * 60 * 24;

export default {
  ANALYTICS_LOAD_ERROR,
  ANALYTICS_SAVE_ERROR,
  BREEDS_LOAD_ERROR,
  BREEDS_SAVE_ERROR,
  FAVOURITES_INVALID_FORMAT,
  FAVOURITES_LOAD_ERROR,
  FAVOURITES_SAVE_ERROR,
  ONE_DAY_MS,
  STORAGE_KEY_ANALYTICS,
  STORAGE_KEY_BREEDS,
  STORAGE_KEY_FAVOURITES,
};
