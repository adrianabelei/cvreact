import React, { Component } from 'react';
import Welcome from './components/Welcome'
import NavBar from './components/NavBar'
import About from './components/About'
import './App.css';
import Footer from './components/Footer'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <Welcome />
            <h2 className = "heading" id="about">About</h2>
            <About />
            <h2 className = "heading" id="projects">Projects</h2>
            <Projects />
           
            <h2 className = "heading" id="education">Education</h2>
            <Education />
            <h2 className = "heading" id="experience">Experience</h2>
            <Experience />
            <h2 className = "heading" id="skills">Skills</h2>
            <Skills />
            <h2 className = "heading" id="footer">For more info, contact me</h2>
            <Footer />
      </div>
    );
  }
}

export default App;