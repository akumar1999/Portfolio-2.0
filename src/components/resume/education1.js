import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link'

export class Education extends Component {
    render() {
        return (
            <div>
              <div className="card card-main">
                  <div className="card-content">
                      <h6><strong>EDUCATIONS</strong></h6>
                      <table className="striped">
                          <thread>
                              <tr>
                                  <th>Achivements</th>
                                  <th>Date</th>
                              </tr>
                          </thread>
                          <tbody>
                              <tr>
                                  <td>Web Development</td>
                                  <td>Jan 2018</td>
                                  <td><Link to="#" className="btn blue lighten-2">View</Link></td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
            </div>
        )
    }
}

export default Education
