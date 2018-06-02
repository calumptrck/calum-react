import React, { Component } from 'react';
import './index.css';

import ContentModal from '../ContentModal';

class ContentPreview extends Component { // <a> Can't be nested
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
  render() {
    const { content } = this.props;
    return (
      <div>
        <ContentModal
          showModal={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
          content={content} />
        <div onClick={this.handleOpenModal} className="project shadow2 grow">
          <div className="ptext">
            <h1>{content.title}</h1>
            <p>{content.desc}</p>
          </div>
          <div className="bullets">
            <ul>
              {content.badges.slice(0, 2).map((badge) =>
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

export default ContentPreview;