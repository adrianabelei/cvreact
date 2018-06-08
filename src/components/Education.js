import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div className = "Education section">
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                 <h3 className="mb-0">Full Stack Web Development Bootcamp</h3>
              <p><b>Restart Network, Rotterdam</b></p>
              <p>January 2018 - June 2018</p>

               <h3 className="mb-0">Postgraduate Degree of Quantitative Methods for Financial Markets</h3>
              <p><b>Universitat Politecnica de Catalunya, Spain</b></p>
              <p>September 2016 - June 2017</p>

               <h3 className="mb-0">Bachelor Degree of Public Management</h3>
              <p><b>Universitat de Barcelona, Spain</b></p>
              <p>September 2009 - June 2013</p>


            </div>
            </div>
        );
    }
}

export default Education;
