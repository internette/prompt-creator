import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/palette.css';

const PalettePresenter = (props) => {
  return (
    <div className="palette">
        {  
          props.colors.map( (color, index)=> {
            return <button key={ index } onClick={ ()=> {
              props.changeColor();
            }}><span style={{ backgroundColor: color.hexString }}></span></button>
          })
        }
      </div>
  );
}

PalettePresenter.propTypes = {
  colors: PropTypes.array.isRequired,
  changeColor: PropTypes.func.isRequired
}

export default PalettePresenter;