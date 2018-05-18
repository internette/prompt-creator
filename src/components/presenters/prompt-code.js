import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/prompt-code.css';

const PromptCodePresenter = (props) => {
  return (
    <div className={ props.toggle_state ? 'active prompt' : 'prompt' }>
        
    </div>
  );
}

PromptCodePresenter.propTypes = {
  parts: PropTypes.array.isRequired,
  prompt: PropTypes.string.isRequired,
  toggle_state: PropTypes.bool.isRequired,
  hideCode: PropTypes.func.isRequired
}

export default PromptCodePresenter;