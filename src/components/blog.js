import React, { Component } from "react";
import './blog.css'
import Interest from "./interest";
import Background from "./background";

export class blog extends Component {
  render() {
    return (
      <div>
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <a href="/Interest">Interests</a>
            </li>
            <li class="tab">
              <a href="/Background">
                Background
              </a>
            </li>
          </ul>
        
        </div>
        
      </div>
    );
  }
}

export default blog;
