import React from 'react';

import Social from './Social';

const Card = () =>
  <div className="card shadow grow2">
    <img className="profilePhoto" src="images/sm-sq.jpg" alt="profile" />
    <h1>Calum Patrick.</h1>
    <p>Currently studying mathematics at the University of Waterloo, as well as designing and developing web apps in
            my free time using Node.js.</p>
    <Social/>
  </div>

export default Card;