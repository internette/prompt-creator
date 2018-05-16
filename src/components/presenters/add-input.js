import React from 'react';
import PropTypes from 'prop-types';

import Palette from '../containers/palette';

import '../../styles/add-input.css';

const AddInputPresenter = (props) => {
  return (
    <div id="add-item">
      <div>
        <div id="input-container">
          <input type="text" id="new-color-value" onChange={(e)=> {
            return props.updateValue(e.target.value);
          }}/>
          <div className="input-button-container">
            <button className="input-button" id="new-item-text-color">T</button>
            <Palette/>
          </div>
          <div className="input-button-container">
            <button className="input-button" id="new-item-bg-color"><span className="bg"></span></button>
            <Palette/>
          </div>
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
  updateValue: PropTypes.func.isRequired
}

export default AddInputPresenter;