import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return (
            <div className="Welcome section">

            <h1 className="welcome-intro"><strong>Adriana Belei</strong> is about to start her career as a <strong>full stack web developer,  </strong>&<strong> living in Rotterdam. </strong>
            <br/>
            <br/>
              <a href="https://www.linkedin.com/in/adrianabeleien/?locale=en_US" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a>  <a href="" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium i.--hov" aria-hidden="true"/></a>  <a href="https://github.com/adrianabelei" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>  <a href="mailto:adrianabelei01@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
            <br/>
              <a href="" target="_blank" rel="noopener noreferrer"><button className="button resume-button">Resume <i className="fa fa-file-pdf-o" aria-hidden="true"/></button></a>
    
    
            </h1>
            <img src="http://res.cloudinary.com/dwtoixcjm/image/upload/v1528376840/Adriana2_ssxulx.jpg" className="main-pic"/>
          </div>
        );
    }
}

export default Welcome;
