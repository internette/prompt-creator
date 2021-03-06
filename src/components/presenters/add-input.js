import React from 'react';
import PropTypes from 'prop-types';

import ColorButton from '../containers/color-button';

import '../../styles/add-input.css';

const AddInputPresenter = (props) => {
  return (
    <div id="add-item">
      <div>
        <div id="input-container">
          <input type="text" id="new-color-value" style={{ color: props.text_color.hex_string, backgroundColor: props.background_color.hex_string }} value={ props.input_value } onKeyDown={(e)=> { return props.updateValue(props, e.key); } }/>
          <ColorButton subject="text" toggle_state={ props.text_btn_toggle }/>
          <ColorButton subject="background" toggle_state={ props.background_btn_toggle }/>
        </div>
      </div>
      <button id={ props.button_view === 'add' ? "add-color" : "edit-color" } onClick={ ()=> {
        if(props.button_view === 'add'){
          return props.addItem({
            input_value: props.input_value,
            text_color: props.text_color,
            background_color: props.background_color,
            text_btn_toggle: props.text_btn_toggle,
            background_btn_toggle: props.background_btn_toggle
          })
        } else {
          return props.updateItem({
            id: props.id,
            input_value: props.input_value,
            text_color: props.text_color,
            background_color: props.background_color,
            text_btn_toggle: props.text_btn_toggle,
            background_btn_toggle: props.background_btn_toggle
          })
        }
       } }>{ props.button_view === 'add' ? '+' : '√' }</button>
    </div>
  );
}

AddInputPresenter.propTypes = {
  id: PropTypes.number.isRequired,
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