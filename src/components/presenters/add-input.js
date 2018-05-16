import React from 'react';
import PropTypes from 'prop-types';

import ColorButton from '../containers/color-button';

import '../../styles/add-input.css';

const AddInputPresenter = (props) => {
  return (
    <div id="add-item">
      <div>
        <div id="input-container">
          <input type="text" id="new-color-value" onChange={(e)=> {
            return props.updateValue(e.target.value);
          }}/>
          <ColorButton subject="text" toggle_state={ props.text_btn_toggle }/>
          <ColorButton subject="background" toggle_state={ props.bg_btn_toggle }/>
        </div>
      </div>
      <button id="add-color">+</button>
    </div>
  );
}

AddInputPresenter.propTypes = {
  input_value: PropTypes.string.isRequired,
  text_color: PropTypes.string.isRequired,
  bg_color: PropTypes.string.isRequired,
  text_btn_toggle: PropTypes.bool.isRequired,
  bg_btn_toggle: PropTypes.bool.isRequired,
  updateValue: PropTypes.func.isRequired
}

export default AddInputPresenter;