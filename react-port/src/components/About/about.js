import React from 'react'
import avatar from '../../assets/avatar.png'

export default function About() {
  return (
    <div>
      <div className="about-me" id="about-me">
  <div className="about-me-border">
    <img src={avatar} width="550" height="400" alt="a pixel avatar of Jessica V" className="avatar" />

  <div className="my-info">
    <h2>My name's Jess!</h2>
    <p>I'm a Sacramento-based front-end developer.</p>
    <p>Prior to entering the big exciting world of tech, I served the community as a respiratory therapist for nearly a decade.
      Now, I'm thrilled to be on this new adventure, utilizing my new experience working with HTML, CSS, Javascript, Node.JS, Express, and MySQL.
    </p>
  </div>

  </div>
</div>
    </div>
  )
}
