import React, { Component } from "react";
import CardSingle from "./singleCard";
import "./card-style.css";

import img1 from "../../assets/technical.png";
import img2 from "../../assets/favicon.png";
import img3 from "../../assets/AMIT.jpg";

export default class Cards extends Component {
  render() {
    return (
      <div className="container1">
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <CardSingle
                imgsrc={img1}
                title="Programming"
                paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galleye release 
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                button="Read More.."
                chipimg1={img1}
                chip1="tag1"
                chipimg2={img2}
                chip2="tag2" 
                chipimg3={img3}
                chip3="tag3"
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={img2}
                title="Cricket"
                paragraph="HEY IM COOL"
                button="Read More.."
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={img3}
                title="Travelling"
                paragraph="HEY IM COOL"
                button="Read More.."
              />
            </div>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <CardSingle
                imgsrc={img2}
                chipimg1={img2}
                title="React"
                paragraph="HEY IM COOL"
                button="Read More.."
                chip1="hey"
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={img3}
                title="React"
                paragraph="HEY IM COOL"
                button="Read More.."
              />
            </div>
            <div className="col-md-4">
              <CardSingle
                imgsrc={img1}
                title="React"
                paragraph="HEY IM COOL"
                button="Read More.."
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
