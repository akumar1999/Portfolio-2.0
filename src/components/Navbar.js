import React, { Component } from "react";
import im1 from '../assets/sidenav.jpg';
import im2 from '../assets/amitavatar.jpg';
import { BrowserRouter as Router, Link } from "react-router-dom";

export class Navbar extends Component {
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
        <nav>
        <Router> 
          <div className="nav-wrapper">
            <a href="#" data-target="slide-out" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
         
            <a class="brand-logo">
              <Link to="/">
              <img
                class="img-responsive"
                width="100px"
                height="50px"
                src="https://i.ibb.co/t34yxyq/logo-removebg-preview.png"
                alt="favicon-removebg-preview"
                border="0"
              />
              </Link>
            </a>
            
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              
            <li><a href="/"> Home</a> </li>
               
              
            <li> <a href="/resume">Resume</a></li>
              
              <li>
               <a href="/background">
                 Projects
                 </a>
              </li>
              <li>
              <a href="/blog">Blog</a> 
              </li>
            </ul>
          </div>
          </Router>
        </nav>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={im1} />
              </div>
              <a href="#user">
                <img className="circle" src={im2} />
              </a>
             
              <a className ="comp" href="https://www.linkedin.com/in/akumar1999m/"
               target="_blank">
                <span className="black-text name ">Amit Kumar</span>
              </a>
              <a className ="comp"
               href="mailto:akumar1999m@gmail.com"
              target="_blank">
                <span className="black-text email ">akumar1999m@gmail.com</span>
              </a>
              </div>
    
          </li>
          <div className="list">
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
          </div>
        </ul>
       
        </div>
      
    );
  }
}

export default Navbar;
