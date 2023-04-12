import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import MovieList from './Mission14/APIMovie';
import Podcast from './Podcast';

function App() {
  // this is the page routing using react router dom
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home Page
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Movies" className="nav-link">
                Movie List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Podcast" className="nav-link">
                Game Code Page
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Movies" element={<MovieList />} />
          <Route path="/Podcast" element={<Podcast />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
