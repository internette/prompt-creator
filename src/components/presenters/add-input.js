import React from 'react';
import PropTypes from 'prop-types';

import ColorButton from '../containers/color-button';

import '../../styles/add-input.css';

const AddInputPresenter = (props) => {
  return (
    <div id="add-item">
      <div>
        <div id="input-container">
          <input type="text" id="new-color-value" style={{ color: props.text_color.hex_string, backgroundColor: props.background_color.hex_string }} onChange={(e)=> { return props.updateValue(e.target.value); } }/>
          <ColorButton subject="text" toggle_state={ props.text_btn_toggle }/>
          <ColorButton subject="background" toggle_state={ props.background_btn_toggle }/>
        </div>
      </div>
      <button id={ props.button_view === 'add' ? "add-color" : "edit-color" } onClick={ ()=> { return props.addItem({
        input_value: props.input_value,
        text_color: props.text_color,
        background_color: props.background_color,
        text_btn_toggle: props.text_btn_toggle,
        background_btn_toggle: props.background_btn_toggle
      }) } }>{ props.button_view === 'add' ? '+' : '√' }</button>
    </div>
  );
}

AddInputPresenter.propTypes = {
  button_view: PropTypes.string.isRequired,
  input_value: PropTypes.string.isRequired,
  text_color: PropTypes.object.isRequired,
  background_color: PropTypes.object.isRequired,
  text_btn_toggle: PropTypes.bool.isRequired,
  background_btn_toggle: PropTypes.bool.isRequired,
  addItem: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired
}

export default AddInputPresenter;