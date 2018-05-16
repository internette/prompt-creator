import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/palette.css';

const PalettePresenter = (props) => {
  return (
    <div className={ props.toggle_state ? 'active palette' : 'palette' }>
        {  
          props.colors.map( (color, index)=> {
            return <button key={ index } onClick={ ()=> {
              return props.changeColor( props.subject, color );
            }}><span style={{ backgroundColor: color.hex_string }}></span></button>
          })
        }
      </div>
  );
}

PalettePresenter.propTypes = {
  toggle_state: PropTypes.bool.isRequired,
  colors: PropTypes.array.isRequired,
  subject: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired
}

export default PalettePresenter;