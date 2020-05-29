import React, { Component } from "react";
import Cards from "./cards/cards";
import BlogNavbar from './blognavbar'

export class Interest extends Component {
  render() {
    return (
      <div>
        <BlogNavbar/>
        <div>
          <Cards />
        </div>
      </div>
    );
  }
}

export default Interest;
