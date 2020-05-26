import React, { Component } from "react";
import "./resume.css";
import Profile from "./resume/profile";
import About from "./resume/about";
import Skills from "./resume/skills1";
import Education from "./resume/education1";
import Portfolios from "./resume/portfolio";
import Experience from "./resume/experience1";
import Info from './resume/Info';
import im2 from "../assets/technical.png";

export class resume extends Component {
  render() {
    return (
      <section>
        <div className="container3">
          <div className="row">
            <div>
              <Profile />
              <a
                href={im2}
                download="AmitKumarResume"
                class="waves-effect  dimgrey waves-light btn"
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "white",
                  width: "100%",
                }}
              >
                <i class="fas fa-file"></i> Download Resume/CV
              </a>
              <Info/>
              
            </div>
            <div className="col s12 m8 l9">
              <About />
              <Experience />
              <Skills />
              <Education />
              <Portfolios />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default resume;
