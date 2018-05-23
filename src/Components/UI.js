import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import twemoji from 'twemoji';
import {articles} from '../projects.js';

import ProjectModal from './ProjectModal';

class UI extends Component { // <a> Can't be nested
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
    const { article } = this.props;
    return (
      <div>
        <ProjectModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          project={article} />
        <div onClick={this.handleOpenModal} className="project shadow2 grow">
          <div className="ptext">
            <h1>{article.title}</h1>
            <p>{article.desc}</p>
          </div>
          <div className="bullets">
            <ul>
              {article.badges.slice(0, 2).map((badge) =>
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

export default UI;