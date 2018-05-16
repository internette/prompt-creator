import React from 'react';
import PropTypes from 'prop-types';

import Palette from '../containers/palette';

const ColorButtonPresenter = (props) => {
  const button_child = props.subject === 'text' ? 'T' : <span className="bg"></span>;
  return (
    <div className="input-button-container">
      <button className="input-button" onClick={ ()=> {
        return props.togglePalette(props.subject, props.toggle_state)
      } }>{ button_child }</button>
      <Palette toggle_state={ props.toggle_state } subject={ props.subject }/>
    </div>
  );
}

ColorButtonPresenter.propTypes = {
  subject: PropTypes.string.isRequired,
  toggle_state: PropTypes.bool.isRequired,
  togglePalette: PropTypes.func.isRequired
}

export default ColorButtonPresenter;