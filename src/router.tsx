import { Navigate, Route, Routes } from 'react-router-dom';

import { BreedModal, Modal } from './components';
import { Analytics, Breeds, Favourites, Gallery } from './views';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Gallery />}>
        <Route path="cat/:imageId" element={<Modal />} />
      </Route>
      <Route path="/breeds" element={<Breeds />}>
        <Route path=":breedId" element={<BreedModal />} />
        <Route path="cat/:imageId" element={<Modal />} />
      </Route>
      <Route path="/favourites" element={<Favourites />}>
        <Route path="cat/:imageId" element={<Modal />} />
      </Route>
      <Route path="/analytics" element={<Analytics />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
