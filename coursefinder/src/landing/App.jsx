import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import CoursesNearYou from '../pages/CoursesNearYou';
import CoursesYouHavePlayed from '../pages/CoursesYouHavePlayed';
import '../landing/App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if the header should be visible
  const shouldShowHeader = location.pathname === '/';

  return (
    <div>
      {shouldShowHeader && (
        <header>
          <h1>Course Finder</h1>
          <h2>A simple app to find courses near you</h2>
          <div className="card">
            <button onClick={() => navigate('/near')}> {/* Navigate to the "Courses Near You" page */}
              Courses Near You
            </button>
            <button onClick={() => navigate('/played')}> {/* Navigate to the "Courses You've Played" page */}
              Courses You've Played
            </button>
          </div>
        </header>
      )}

      {/* Routes for different pages */}
      <main>
        <Routes>
          <Route path="/" element={<div>Welcome to the Course Finder!</div>} /> {/* Root route */}
          <Route path="/near" element={<CoursesNearYou />} />
          <Route path="/played" element={<CoursesYouHavePlayed />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
