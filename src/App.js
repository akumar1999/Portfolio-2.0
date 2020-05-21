import React from "react";
import "./App.css";
import Main from "./components/main";
import { Navigation, Content } from "react-mdl";


function App() {
  return (
    <div>
      <header class="navbar-header">
        <div class="menu">
          <span class="bar"></span>
        </div>
        <div class="container-navbar">
          <Navigation class="navigationbar">
            <div class="lgo1">
            <a href="/">
              <img
                class="img-responsive"
                width="100px"
                height="50px"
                src="https://i.ibb.co/t34yxyq/logo-removebg-preview.png"
                alt="favicon-removebg-preview"
                border="0"
              />
            </a>
            </div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
              <li>
                <a href="/projects">Project</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
            
          </Navigation>
        </div>
      </header>

      <Content>
        <div className="page-content" />
        <Main />
      </Content>
    </div>
  );
}

export default App;
