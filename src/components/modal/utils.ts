import type { Cat } from '../../types';

const getBreedInfo = (image: Cat | null) => {
  if (!image?.breeds?.length) return null;
  return image.breeds[0];
};

const getBreedLinkPath = (breedId: string): string => {
  return `/breeds/${breedId}`;
};

const calculateBreedLinkPath = (
  breedId: string,
  currentPath: string
): string => {
  const isInBreedModal = currentPath.startsWith(`/breeds/${breedId}`);
  return isInBreedModal ? `/breeds/${breedId}` : getBreedLinkPath(breedId);
};

const getParentPath = (pathname: string): string => {
  const pathParts = pathname.split('/cat/')[0];
  return pathParts || '/';
};

export default {
  getBreedInfo,
  getBreedLinkPath,
  calculateBreedLinkPath,
  getParentPath,
};
