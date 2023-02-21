import './App.css';
import MovieDetails from './components/MovieDetails';
import Home from './pages/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-movie' element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;