import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    <Router>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/projects/:id" component={Project} />
        <Route path="/cv" component={CV} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
