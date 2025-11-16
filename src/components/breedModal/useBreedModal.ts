import { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { fetchImagesByBreed } from '../../api';
import { selectBreeds, useCatsSelector } from '../../store/hooks';

import C from './constants';
import type { Breed, Cat } from '../../types';

const useBreedModal = () => {
  const [images, setImages] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { breedId } = useParams<{ breedId: string }>();

  const breeds = useCatsSelector(selectBreeds);
  const breed: Breed | null = breedId ? breeds[breedId] : null;

  const loadBreedImages = useCallback(() => {
    if (!breedId) {
      return;
    }
    setIsLoading(true);
    setError(null);

    fetchImagesByBreed(breedId, C.MAX_IMAGES_TO_DISPLAY)
      .then((data: Cat[]) => {
        setImages(data);
      })
      .catch(() => {
        setError(C.ERROR_TEXT);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [breedId]);

  const handleClose = (): void => {
    navigate('/breeds');
  };

  const handleBackdropClick = (event: React.MouseEvent): void => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return {
    breed,
    images,
    isLoading,
    error,
    loadBreedImages,
    handleBackdropClick,
    handleClose,
  };
};

export default useBreedModal;
