import React from 'react';
import ReactModal from 'react-modal';

import CloseModalButton from './CloseModalButton'

const ProjectModal = ({ showModal, handleCloseModal, project }) =>
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
            <p>{project.desc}</p>
          </div>
          <CloseModalButton
            className="closeModalButton"
            onClick={handleCloseModal}
          />
        </div>
        <hr />
        <div className="modalSidebar">
          <div className="modalBullets">
            <ul>
              <a href={project.badges[0].link} key={project.badges[0].text}>
                <li className="badge-cta shadow grow">{project.badges[0].text}</li>
              </a>
              {project.badges.slice(1).map((badge) =>
                <a href={badge.link} key={badge.text}>
                  <li className="shadow3 grow">{badge.text}</li>
                </a>
              )}
            </ul>
          </div>
          <hr/>
          <p>{project.longDesc}</p>
        </div>
        <div className="preview-image">
          <img src={project.preview} alt="project-preview" />
        </div>
      </div>
    </ReactModal>
  </div>

  export default ProjectModal;