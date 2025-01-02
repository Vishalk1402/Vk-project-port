import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div className="app">
      <main>
        <Homepage />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
