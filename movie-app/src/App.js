import { Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Header/Header';
import MovieList from './pages/Movielist/MovieList';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movielist" element={<MovieList />} />
      </Routes>
    </div>
  );
}

export default App;