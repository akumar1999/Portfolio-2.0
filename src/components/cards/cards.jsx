import React, { Component } from "react";
import CardSingle from "./singleCard";
import "./card-style.css";

import img1 from "../../assets/technical.png";
import img2 from "../../assets/favicon.png";
import img3 from "../../assets/AMIT.jpg";

export default class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <CardSingle
                imgsrc={img1}
                title="React"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="Tap for More"
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={img2}
                title="React"
                paragraph="HEY IM COOL"
                button="Tap for More"
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={img3}
                title="React"
                paragraph="HEY IM COOL"
                button="Tap for More"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <CardSingle
                imgsrc={img2}
                title="React"
                paragraph="HEY IM COOL"
                button="Tap for More"
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={img3}
                title="React"
                paragraph="HEY IM COOL"
                button="Tap for More"
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={img1}
                title="React"
                paragraph="HEY IM COOL"
                button="Tap for More"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
