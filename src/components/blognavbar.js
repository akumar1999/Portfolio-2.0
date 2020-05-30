import React, { Component } from "react";
import './blog.css'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {motion} from 'framer-motion'
import Interest from "./interest";
import Background from './background';

export class BlogNavbar extends Component {

  render()
   {
    return (
      <Router>
        <div>
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <Link to="/interest">Interests</Link>
            </li>
            <li class="tab">
              <Link to="">
                Background
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/interest">
          <Interest/>
        </Route>
        <Route path ="/background">
          <Background/>
        </Route>
      </Switch>
      </Router>
    );
  }
}

export default BlogNavbar;
