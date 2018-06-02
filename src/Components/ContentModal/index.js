import React from 'react';
import ReactModal from 'react-modal';
import {ProjectTemplate, ArticleTemplate} from '../Templates';


const ContentModal = ({ showModal, handleCloseModal, content }) =>
  <div>
    <ReactModal
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      className="Modal"
      overlayClassName="Overlay"
    >
    {console.log(content.type)}
    {content.subtext 
      ? <ArticleTemplate handleCloseModal={handleCloseModal} article={content}/> 
      : <ProjectTemplate handleCloseModal={handleCloseModal} project={content}/> }
    </ReactModal>
  </div>

export default ContentModal;