import React, { Component } from "react";
import Cards from "./cards/cards";
import './blog.css'

export class blog extends Component {
  render() {
    return (
      <div>
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <a href="#test1">Interests</a>
            </li>
            <li class="tab">
              <a href="#test2">
                Background
              </a>
            </li>
          </ul>
        </div>

        <Cards />
      </div>
    );
  }
}

export default blog;
