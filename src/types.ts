export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds?: Breed[];
};

export type Breed = {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  temperament: string;
  origin: string;
  description: string;
  life_span: string;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  image: Cat;
};
