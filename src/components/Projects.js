import React, { Component } from 'react';
import github from '../images/github.png'
import bitcoin from '../images/bitcoin.png'
import market from '../images/market.png'
import api from '../images/api.png'

class Projects extends Component {
  render() {
    return (
      <div className="Projects section flex-container">
        <div className="item">
          <img src={github} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Github Battle</h3>
              
              <p>JavaScript, React</p>
              <p><a href="https://githubbattle-dd79b.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Explore App <i className="fa fa-external-link"/></a></p>
              <p><a href="https://github.com/adrianabelei/Github-Battle" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={bitcoin} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Bitcoin Monitor</h3>
              <p>Javascript, React</p>
              <p><a href="https://boiling-beyond-76213.herokuapp.com/" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
              <p><a href="https://github.com/adrianabelei/bitcoin-monitor" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={market} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Restart Marketplace</h3>
         
              <p>JavaScript, React, MongoDb, Bootstrap, NodeJs, </p>
              <p><a href="https://restart-market.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a> Access code: 123</p>
              <p><a href="https://github.com/adrianabelei/restartmarketplace" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={api} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>HackerNews  API</h3>
        
              <p>JavaScript, React, API</p>
              <p><a href="https://still-fjord-52496.herokuapp.com/" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
              <p><a href="https://github.com/adrianabelei/Hacker---News--Api" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;