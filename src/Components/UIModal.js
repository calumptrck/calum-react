import React from 'react';
import ReactModal from 'react-modal';

import CloseModalButton from './CloseModalButton'

const UIModal = ({ showModal, handleCloseModal, project }) =>
  <div>
    <ReactModal
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modalBody">
        <div className="modalHeader">
          <div className="modalTitle">
            <h3>{project.title}</h3>
          </div>
          <CloseModalButton
            className="closeModalButton"
            onClick={handleCloseModal}
          />
        </div>
        <hr className="hr2"/>
        <div class="caseStudy">
          <div className="spacer"></div>
          <p>{project.subtext}</p>
          <div className="spacer"></div>
          <div className="preview-image2">
            <img src={project.img1} alt="project-preview" />
          </div>
          <h4>{project.header1}</h4>
          <p>{project.text1}</p>
        </div>
        </div>
    </ReactModal>
  </div>

export default UIModal;