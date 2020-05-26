import React, { Component } from 'react'
import im2 from '../../assets/amitavatar.jpg'
import {HashLink as Link} from 'react-router-hash-link'

export class Profile extends Component {
    render() {
        return (
            <div>
               <div className="card card-profile">
                   <div className ="card-image">
                       <img classNamee="activator" src={im2} alt="AMIT" style={{width: 250, paddingTop:10, display: 'block', margin:'auto', borderRadius: '50%' }} />
                   </div>
                <div className="card-content content-profile">                
                    <span className="card-title activator grey-text text-darken-4" style={{display: 'flex', paddingLeft: 5, marginBottom: 1, fontSize:20}}>
                        AMIT KUMAR
                    </span>
                    <span className="card-title" style={{paddingLeft:5, fontSize:16}} >Full Stack Web Developer</span>
                    <span className="card-text grey-text text-darken-4" style={{display: 'flex', paddingLeft: 5, fontSize:14, fontWeight:'bold', fontStyle:'italic' }}>
                    Follow Me:
                </span>
                <p className="flex-container" style={{display: 'flex', paddingRight:20, paddingLeft: 20, justifyContent:'space-evenly', justifySelf:'center', fontSize:20}}>
                    <a href="#"><i className=' fab fa-linkedin grey-text text-darken-3 social-style'></i></a>
                    <a href="#"><i className=' fab fa-google grey-text text-darken-3 social-style'></i></a>
                    <a href="#"><i className=' fab fa-github grey-text text-darken-3 social-style'></i></a>
                    <a href="#"><i className=' fab fa-twitter grey-text text-darken-3 social-style'></i></a>
                </p>
                </div>
               </div>
            </div>
        )
    }
}

export default Profile
