import React from 'react';
import PropTypes from 'prop-types';

import ColorButton from '../containers/color-button';

import '../../styles/list-item.css';

const ListItemPresenter = (props) => {
  const child_view = props.is_editing ? <input type="text"/> : <span>{ props.input_value }</span>;
  return (
    <li className="list-item" style={{ color: props.text_color.hex_string, backgroundColor: props.background_color.hex_string }}>
      <div id="input-container">
        { child_view }
        <ColorButton subject="text" toggle_state={ props.text_btn_toggle }/>
        <ColorButton subject="background" toggle_state={ props.background_btn_toggle }/>
      </div>
    </li>
  );
}

ListItemPresenter.propTypes = {
  is_editing: PropTypes.bool.isRequired,
  input_value: PropTypes.string.isRequired,
  text_color: PropTypes.object.isRequired,
  background_color: PropTypes.object.isRequired,
  text_btn_toggle: PropTypes.bool.isRequired,
  background_btn_toggle: PropTypes.bool.isRequired,
  editItem: PropTypes.func.isRequired
}

export default ListItemPresenter;