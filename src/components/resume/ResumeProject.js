import React, { Component } from "react";
import SingleProject from "./SingleProject";

export class ResumeProject extends Component {
  render() {
    return (
      <div>
        <div className="card-content">
          <div className="card card-main" style={{ paddingTop: 30 }}>
            <h5>
              <strong
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  paddingLeft: 20,
                }}
              >
                Projects
              </strong>
            </h5>
            <SingleProject
              type="Web App"
              name="Personal Portfolio"
              tech="React Js, Material-mdl, react-router-dom"
              description=" Used React framework (Reactjs), nodejs, yarn, Html5, CSS and UI components like Material UI to build personal portfolio with the help of open source platform netlify. Link: akumarportfolio.netlify.com"
            />
            <SingleProject
              type="Desktop App"
              name="Python ChatBot"
              tech="Python, GTTS, smtp library"
              description=" Python based desktop assistant, helping in performing basic tasks i.e., sending mails, opening specific folder. Uses GTTS (google text-to-speech) and smtp library of Python."
            />

            <SingleProject
              type="Web App"
              name="Personal Portfolio"
              tech="React Js, Material-mdl, react-router-dom"
              description=" Used React framework (Reactjs), nodejs, yarn, Html5, CSS and UI components like Material UI to build personal portfolio with the help of open source platform netlify. Link: akumarportfolio.netlify.com"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeProject;
