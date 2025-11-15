import Navigation from './components/navigation';

import AppRouter from './router';

import './App.css';

const App = () => {
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
