import React from 'react';

const Section = ({ title, className, children }) =>
  <section className={className}>
    <h1 className="stitle">{title}</h1>
    <hr />
    {children}
  </section>

export default Section