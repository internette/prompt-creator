import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/terminal.css';

const TerminalPresenter = (props) => {
  return (
    <div id="bash-prompt">
        <div id="bash-prompt-content">
          <div id="title-bar"></div>
          <div id="content-container">
            <div id="content"></div>
          </div>
        </div>
      </div>
  );
}

TerminalPresenter.propTypes = {
  listItems: PropTypes.array.isRequired
}

export default TerminalPresenter;