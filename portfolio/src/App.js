import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Project from './components/Project';
import CV from './components/CV';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import GlobalStyles from './assets/styles/GlobalStyles';

function App() {
  return (
    <Router basename="/Zain_mughal_Portfolio.github.io">
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
