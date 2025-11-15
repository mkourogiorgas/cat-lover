const endpoints = {
  IMAGES: '/images/search' as const,
  IMAGE_BY_ID: (imageId: string): string => `/images/${imageId}`,
  BREEDS: '/breeds' as const,
  BREED_BY_ID: (breedId: string): string => `/breeds/${breedId}`,
} as const;

export default endpoints;
