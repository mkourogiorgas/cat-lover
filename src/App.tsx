import './App.css';
import Navigation from './components/navigation';
import AppRouter from './router';

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
