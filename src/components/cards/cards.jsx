import React, { Component } from 'react';
import CardSingle from './singleCard'
import './card-style.css'

import img1 from '../../assets/technical.png';
import img2 from '../../assets/favicon.png';
import img3 from '../../assets/AMIT.jpg';

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
                paragraph="HEY IM COOL"
                button="Tap for More"/>
            </div>
            <div className="col-md-4">
                <CardSingle
                imgsrc={img2}
                title="React"
                paragraph="HEY IM COOL"
                button="Tap for More"/>
            </div>
            <div className="col-md-4">
                <CardSingle
                imgsrc={img3}
                title="React"
                paragraph="HEY IM COOL"
                button="Tap for More"/>
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
                button="Tap for More"/>
            </div>
            <div className="col-md-4">
            <CardSingle
                imgsrc={img3}
                title="React"
                paragraph="HEY IM COOL"
                button="Tap for More"/>
            </div>
            <div className="col-md-4">
            <CardSingle
                imgsrc={img1}
                title="React"
                paragraph="HEY IM COOL"
                button="Tap for More"/>
            </div>
        </div>

        </div>

    </div>
    
);
}

}