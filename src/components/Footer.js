import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className = "Footer">
            <div className = "footer-1">
            

            </div>
        <div className = "footer-2">
        <h3>Contact</h3>
        <p><a href="mailto:adrianabelei01@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> adrianabelei01@gmail.com</a></p>
          <p><a href="https://www.linkedin.com/in/adrianabeleien/?locale=en_US" target="_blank" rel="noopener noreferrer" className="footer-link"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/> Linkedin</a></p>
          <p><a href="https://github.com/adrianabelei" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/> Github</a></p>
          <p><a href="https://medium.com/@adrianabelei01" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium i-hov" aria-hidden="true"/> Blog</a></p><br/>
          <h3>This Site</h3>
          <p>Made with ❤️ <strong>from Rotterdam</strong> using React, JavaScript and CSS</p>
      

        </div>
            </div>
        );
    }
}

export default Footer;
