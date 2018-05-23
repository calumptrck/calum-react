import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Card = () =>
  <div className="card shadow grow2">
    <img className="profilePhoto" src="images/sm-sq.jpg" alt="profile" />
    <h1>Calum Patrick.</h1>
    <p>Currently studying mathematics at the University of Waterloo, as well as designing and developing web apps in
            my free time using Node.js.</p>
    <div className="social">
      <a href="//github.com/calumptrck">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      <a href="//www.instagram.com/calumpat/">
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a href="//twitter.com">
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="//www.youtube.com/channel/UCM2Fz5E-jKbEsMPRedz9ppQ">
        <i className="fa fa-youtube" aria-hidden="true"></i>
      </a>
      <a href="mailto:calum@calum.co">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </a>
    </div>
  </div>

export default Card;