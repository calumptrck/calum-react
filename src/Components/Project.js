import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import twemoji from 'twemoji';
import {projects} from '../projects.js';

import ProjectModal from './ProjectModal';

class Project extends Component { // <a> Can't be nested
  constructor() {
    super();
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  parseEmoji = () => {
    twemoji.parse(ReactDOM.findDOMNode(this))
  }

  componentDidMount() {
    this.parseEmoji()
  }
  render() {
    const { project } = this.props;
    return (
      <div>
        <ProjectModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          project={project} />
        <div onClick={this.handleOpenModal} className="project shadow2 grow">
          <div className="ptext">
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
          </div>
          <div className="bullets">
            <ul>
              {project.badges.slice(0, 2).map((badge) =>
                <div key={badge.text}>
                  <li>{badge.text}</li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;