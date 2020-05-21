import React, { Component } from 'react';
import './card-style.css'



export default class CardSingle extends Component {
    render() {
return (
    <div>
    <div className="card text-center shadow">
        <div className="overflow">
            <img src={this.props.imgsrc} alt=" image1" className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text text-secondary"> 
                {this.props.paragraph}
            </p>
            <a href="#" className="btn btn-outline-success">
                {this.props.button}
            </a>
            </div>
    </div>
    </div>
);
}

}