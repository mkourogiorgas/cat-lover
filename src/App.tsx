import './App.css';
import Navigation from './components/navigation';
import {
  useAnalyticsPersistence,
  useBreedsPersistence,
  useFavouritesPersistence,
} from './hooks';
import AppRouter from './router';

const App = () => {
  useAnalyticsPersistence();
  useBreedsPersistence();
  useFavouritesPersistence();

  return (
    <div className="app">
      <Navigation />
      <main className="main">
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
