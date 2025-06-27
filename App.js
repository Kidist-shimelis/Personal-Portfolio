import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';
import Main from './pages/Main/Main';
import ProjectPage from './pages/Project/ProjectPage';
import { BackToTop } from './components';
import ScrollToTop from '../src/utils/ScrollToTop';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);
  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);

// console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Catch-all for redirects */}
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
