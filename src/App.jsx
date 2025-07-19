import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import Blogs from './Blog';
import './theme/variables.css';


const App = () => {
  return (
    <Router basename="/KhisaPortfolio/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
