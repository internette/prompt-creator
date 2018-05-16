import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/terminal.css';

const TerminalPresenter = (props) => {
  return (
    <div id="bash-prompt">
        <div id="bash-prompt-content">
          <div id="title-bar"></div>
          <div id="content-container">
            <div id="content">
              {
                props.parts.map((part, index)=> {
                  return <span key={index} style={{ color: part.text_color.hex_string, backgroundColor: part.background_color.hex_string }}>{ part.input_value }</span>
                })
              }
            </div>
          </div>
        </div>
      </div>
  );
}

TerminalPresenter.propTypes = {
  parts: PropTypes.array.isRequired
}

export default TerminalPresenter;