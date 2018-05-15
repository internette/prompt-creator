import React from 'react';
import PropTypes from 'prop-types';

import AddInput from '../containers/add-input';

import '../../styles/creator.css';

const CreatorPresenter = (props) => {
  return (
    <div id="creator">
        <h1><span>Prompt Creator</span><button id="get-code">&lt;/&gt;</button><button id="how-to">?</button></h1>
        <div>
          <ul id="bash-list-items">
          </ul>
          <AddInput/>
        </div>
      </div>
  );
}

CreatorPresenter.propTypes = {
  listItems: PropTypes.array.isRequired
}

export default CreatorPresenter;