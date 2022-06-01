import React from "react";
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javasc from '../../assets/js.png';
import mysql from '../../assets/mysql.png';
import node from '../../assets/node.png';
import express from '../../assets/Expressjs.png';

export default function Skills() {
  return (
    <div className="languages">
        <h2 className="skills">Skills:</h2>
            <div className="skills-container">
                <div className="skills-row"><img src={html} width="150" height="100" alt="html icon" /></div>
                <div className="skills-row"><img src={css} width="100" height="90" alt="css icon" style="margin-top: 15px" /></div>
                <div className="skills-row"><img src={javasc} width="100" height="100" alt="js icon" /></div>
                <div className="skills-row"><img src={node} width="100" height="100" alt="node icon" /></div>
                <div className="skills-row"><img src={express} width="150" height="100" alt="express icon" /></div>
                <div className="skills-row"><img src={mysql} width="100" height="100" alt="mysql icon" /></div>
            </div>  
    </div>
  )
}
