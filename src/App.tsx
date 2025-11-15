import { useEffect } from 'react';

import {
  fetchAllBreeds,
  fetchCatImageById,
  fetchImagesByBreed,
  fetchRandomCats,
} from './api/services';

import './App.css';

const App = () => {
  useEffect(() => {
    fetchAllBreeds().then(console.log);
    fetchRandomCats().then(console.log);
    fetchCatImageById('r_njVlaSz').then((data) =>
      console.log('cat image:', data)
    );
    fetchImagesByBreed('abys').then((data) =>
      console.log('breed images:', data)
    );
  }, []);

  return <></>;
};

export default App;
