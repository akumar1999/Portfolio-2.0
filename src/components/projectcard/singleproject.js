import React, { Component } from 'react'
import img1 from "../../assets/technical.png";
import './singleprojectstyle.css'

export class SingleProject extends Component {
    render() {
        return (
            <div>
                <div className="row">
    <div className="col s12 m7">
      <div className="card new-card">
        <div className="card-image">
          <img className="image1" src={img1}/>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className =" btn btn-outline-success">
          <a href="#">GO TO GITHUB</a>
        </div>
      </div>
    </div>
  </div>
            
            </div>
        )
    }
}

export default SingleProject