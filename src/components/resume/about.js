import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div>
        <div className="card card-main">
          <div className="card-content">
            <h5 className="mt-bottom">
              <strong style={{ fontWeight: "bold" }}>ABOUT ME</strong>
            </h5>
            <h5
              className="black-text"
              style={{ fontSize: 17, paddingRight: 20 }}
            >
              Passionate and curious Information Technology student with a few
              months of web development/Database Management System (MySQL)
              experience along with developing skills to become an efficient
              software Developer. Developing/applying skills in Python, C++,
              MySQL, and JavaScript to create/maintain existing
              Software/Websites/Databases. Pursuing Bachelors of Technology
              focused in Information Technology (I.T) From National Institute of
              Technology Kurukshetra, Haryana.
              <br />
              <br />
              Interested in the field of Data Sciences, Data Engineering, Cloud
              Computing and Web/Software Development.
            </h5>
           

            <h5 className="mt-bottom">
              <strong style={{ fontWeight: "bold" }}>Relevant Courses:</strong>
            </h5>
            <h5
              className="black-text"
              style={{ fontSize: 17, paddingRight: 20, fontWeight:'bold' }}
            >
              Data Structure, C++, Python, Java, Data Analysis and Algorithm, 
              Software Engineering, Software Project Management, DBMS, MySQL
            </h5>
            <br />
            <hr style={{ borderTop: "1px solid 	#A9A9A9", width: "100%" }} />

            <h5 className="mt-bottom">
              <strong style={{ fontWeight: "bold" }}>EDUCATION</strong>
            </h5>

            <div className="row">
              <div style={{ marginLeft: 10 }}>
                <p
                  className="black year_exp white-text"
                  style={{
                    paddingRight: 10,
                    paddingLeft: 10,
                    borderRadius: 10,
                  }}
                >
                  Aug <strong>2017</strong> - May <strong>2021</strong>
                </p>

                <h6
                  style={{
                    justifyContent: "end",
                    textTransform: "capitalize",
                    paddingLeft: 10,
                  }}
                >
                  Haryana, India
                </h6>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <h4>National Institute of Technology, Kurukshetra</h4>
                    <strong style={{ fontSize: 18, fontWeight: "bold" }}>
                      Bachelor's Degree, Information Technology , CGPA - 6.65/10
                    </strong>
                  </h6>
                </blockquote>
              </div>
            </div>

            <div className="row">
              <div style={{ marginLeft: 10 }}>
                <p
                  className="black year_exp white-text"
                  style={{
                    paddingRight: 10,
                    paddingLeft: 10,
                    borderRadius: 10,
                  }}
                >
                  Nov <strong>2013</strong> - May <strong>2017</strong>
                </p>

                <h6
                  style={{
                    justifyContent: "end",
                    textTransform: "capitalize",
                    paddingLeft: 10,
                  }}
                >
                  Colombo, Sri Lanka
                </h6>
              </div>
              <div className="col s12 m8 l8 xl8">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <h4>Overseas School Of Colombo, Sri Lanka</h4>
                    <strong style={{ fontSize: 18, fontWeight: "bold" }}>
                      International Baccalaureate Diploma (with Honors)
                    </strong>
                  </h6>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
