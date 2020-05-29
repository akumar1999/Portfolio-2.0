import React, { Component } from "react";
import AllProject from "./projectcard/allproject";
import {motion} from 'framer-motion'

export class Projects extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AllProject />
      </motion.div>
    );
  }
}

export default Projects;
