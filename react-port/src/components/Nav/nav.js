import React from "react";


export default function Nav(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <nav>
        <div className="nav-bar">
            <div className="color1" id="dot-border">
                <a href="about" style={{textDecoration: 'none'}}>About Me</a>
            </div>
            <br />
        <div className="color2" id="dot-border">
            <a href="skills" style={{textDecoration: 'none'}}>Skills</a>
        </div>
            <br />
        <div className="color3" id="dot-border">
            <a href="works" style={{textDecoration: 'none'}}>Works</a>
        </div>
            <br />
        <div className="color4" id="dot-border">
            <a href="assets/Resume.mht" style={{textDecoration: 'none'}}>Resume</a>
        </div>
            <br />
        <div className="color5" id="dot-border">
        <a href="contact" style={{textDecoration: 'none'}}>Contact</a>
            </div>
        </div>
    </nav>
  )
}
