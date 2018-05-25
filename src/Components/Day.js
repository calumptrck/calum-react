import React from 'react';
import moment from 'moment';

const Day = ({ day }) =>
  <div className="day shadow2">

    <h1 className="taskDate">
      <p>{day.date === moment().format('MMMM Do')
        ? "Today"
        : day.date}</p>
    </h1>
    <hr />
    <ul>
      {day.tasks.map((task, index) =>
        <li key={index}>
          <span className="check" role="img" aria-label="check">✅ </span>
          {task}
        </li>
      )}

    </ul>
  </div>

export default Day;