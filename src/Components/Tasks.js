import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Day from './Day'

const Tasks = ({ days, quantity, addTasks }) =>
  <section className="tasks">
    <h1 className="stitle">What I'm working on:</h1>
    <hr />
    <ReactCSSTransitionGroup
      transitionName="addTask"
      transitionEnterTimeout={700}
      transitionLeaveTimeout={700}
      transitionAppear={true}
      transitionAppearTimeout={1000}
    >
      {days.slice(0, quantity).map((day) =>
        <Day day={day} key={day._id} />
      )}
    </ReactCSSTransitionGroup>
    <div className="desc">
      <span onClick={() => addTasks(2)} role="img" aria-label="check">👀</span>
    </div>
  </section>

  export default Tasks;