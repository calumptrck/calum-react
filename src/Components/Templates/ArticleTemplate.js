import React from 'react';

import CloseModalButton from '../CloseModalButton';

const ArticleTemplate = ({ handleCloseModal, article }) =>
  <div className="modalBody">
    <div className="modalHeader">
      <div className="modalTitle">
        <h3>{article.title}</h3>
      </div>
      <CloseModalButton
        className="closeModalButton"
        onClick={handleCloseModal}
      />
    </div>
    <hr className="hr2" />
    <div class="caseStudy">
      <div className="spacer"></div>
      <p>{article.subtext}</p>
      <div className="spacer"></div>
      <div className="preview-image2">
        <img src={article.img1} alt="article-preview" />
      </div>
      <h4>{article.header1}</h4>
      <p>{article.text1}</p>
    </div>
  </div>

export default ArticleTemplate;