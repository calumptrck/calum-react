import React, { Component } from 'react';
import './App.css';
import ReactModal from 'react-modal';
import axios from 'axios';
import { projects, ui } from '../projects.js';
import twemoji from 'twemoji';


import UI from './UI';
import Project from './Project';
import Card from './Card';
import Tasks from './Tasks';
import Section from './Section'
import ContentPreview from './ContentPreview';

ReactModal.setAppElement('body');

class App extends Component {
  _isMounted = false; // Independent from state
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
    twemoji.parse(document.body);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { projects, tasks, limit } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card />
            <Section title="Featured" className="featuredBlock">
              {projects.filter((project) => project.featured).map((project, index) =>
                <ContentPreview key={project.title} content={project} />
              )}
              <ContentPreview key={ui.title} content={ui} />
            </Section>

              <Section title="My Work" className="projects">
              {projects.filter((project) => !project.featured).map((project, index) =>
                <ContentPreview key={project.title} content={project} />
              )}
            </Section>
          </div>
          <div className="col-md-6">
            {tasks && <Tasks days={tasks} addTasks={this.addTasks} quantity={limit} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
