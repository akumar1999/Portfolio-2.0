import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div>
                <div className="card card-main">
                    <div className="card-content">
                        <h5 className="mt-bottom">
                            <strong style={{fontWeight:'bold'}}>ABOUT ME</strong>
                        </h5>
                        <h5 className="black-text" style={{fontSize: 17, paddingRight:20}}>
                        Passionate and curious Information Technology student with a few months of web development/Database Management System (MySQL) experience along with developing skills to become an efficient software Developer. Developing/applying skills in Python, C++, MySQL, and JavaScript to create/maintain existing Software/Websites/Databases.
                        Pursuing Bachelors of Technology focused in Information Technology (I.T) From National Institute of Technology Kurukshetra, Haryana.
                        <br/>
                        <br/>
                        Interested in the field of Data Sciences, Data Engineering, Cloud Computing and Web/Software Development.
                        
                        </h5> 
                    </div>
                    <div className="card-action">
                        
                        </div>
                </div>
            </div>
        )
    }
}

export default About
