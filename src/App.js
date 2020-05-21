import React, {Component} from "react";
import "./App.css";
import Main from "./components/main";
import { Navigation, Content } from "react-mdl";

import im1 from './assets/technical.png';
import im2 from './assets/AMIT.jpg';

export default class App extends Component {

componentDidMount() {
  const M = window.M
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
}
  render() {
  return (
    <div>
      <nav >
        <div className="nav-wrapper" >
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        
            <a href="/" class="brand-logo">
              <img
                class="img-responsive"
                width="100px"
                height="50px"
                src="https://i.ibb.co/t34yxyq/logo-removebg-preview.png"
                alt="favicon-removebg-preview"
                border="0"
              />
            </a>
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>

          </ul>
        </div>
      </nav>

<ul id="slide-out" className="sidenav">
  <li><div className="user-view">
    <div className="background">
      <img src={im1}/>
    </div>
    <a href="#user"><img className="circle" src={im2}/></a>
    <a href="#name"><span className="white-text name">Amit Kumar</span></a>
    <a href="#email"><span className="white-text email">akumar1999m@gmail.com</span></a>
  </div></li>
  <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/resume">Resume</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
  
</ul>

      

      <Main />
    </div>
  );
}
}
