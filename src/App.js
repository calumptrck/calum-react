import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import twemoji from 'twemoji';
import ReactModal from 'react-modal';
import axios from 'axios';
import { projects, ui } from './projects.js';


import UI from './Components/UI';
import Project from './Components/Project';
import Card from './Components/Card';
import Tasks from './Components/Tasks';

ReactModal.setAppElement('body');

class App extends Component {
  _isMounted = false; // Independant from state
  constructor(props) {
    super(props)
    this.state = {
      projects: projects,
      limit: 4,
      tasks: null,
      error: null,
    }
    this.fetchTasks = this.fetchTasks.bind(this);
    this.addTasks = this.addTasks.bind(this);

  }

  addTasks(n) {
    const oldLimit = this.state.limit;
    this.setState({ limit: oldLimit + n })

  }

  fetchTasks() {
    axios(`https://calum.co/api/tasks`)
      .then(result => this._isMounted && this.setState({ tasks: result.data }))
      .catch(error => this._isMounted && this.setState({ error: error }))
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchTasks();
  }

  componentWillUnmount() {
    this._isMounted = true;
  }

  render() {
    const { projects, tasks, limit } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 twi">
            <Card />
            <Section title="Featured" className="featuredBlock">
              <UI key={ui.title} article={ui} />
              {projects.filter((project) => project.featured).map((project, index) =>
                <Project key={project.title} project={project} />
              )}
            </Section>

              <Section title="My Work" className="projects">
              {projects.filter((project) => !project.featured).map((project, index) =>
                <Project key={project.title} project={project} />
              )}
            </Section>
          </div>
          <div className="col-lg-6">
            {tasks && <Tasks days={tasks} addTasks={this.addTasks} quantity={limit} />}
          </div>
        </div>
      </div>
    );
  }
}





const Section = ({ title, className, children }) =>
  <section className={className}>
    <h1 className="stitle">{title}</h1>
    <hr />
    {children}
  </section>

export default App;
