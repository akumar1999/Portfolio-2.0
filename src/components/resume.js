import React, { Component } from "react";
import "./resume.css";
import Profile from "./resume/profile";
import About from "./resume/about";
import Skills from "./resume/skills1";
import { Achivements } from "./resume/Achivements";
import { ResumeProject } from "./resume/ResumeProject";
import Experience from "./resume/experience1";
import Info from "./resume/Info";
import im2 from "../assets/technical.png";
import Activities from "./resume/Activities";
import {motion} from 'framer-motion'

export class Resume extends Component {
  render() {
    return (
      <section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="container3"
        >
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
              <Info />
            </div>
            <div className="col s12 m8 l9">
              <About />
              <Experience />
              <Skills />
              <ResumeProject />
              <Activities />
              <Achivements />
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
}

export default Resume;
