import { connect } from 'react-redux';

import { colors } from '../exports';

import AddInputPresenter from '../presenters/add-input';

import { addItem, updateItem, updateValue, setColor } from '../actions';

function updateIconTheme(props){
  return Object.assign({}, props, {
    icon_theme: colors.filter((color_obj)=> {
      if(color_obj.hex_string.toLowerCase() === props.background_color.hex_string.toLowerCase()){
        return color_obj
      }
    })[0].icon_color
  });
}

const mapStateToProps = (state, ownProps) => {
  return {
    id: state.add_input.id || 0,
    button_view: state.add_input.button_view || 'add',
    input_value: state.add_input.input_value || '',
    icon_theme: state.add_input.icon_theme || 'light',
    text_color: state.add_input.text_color || {},
    background_color: state.add_input.background_color || {},
    text_btn_toggle: state.add_input.text_btn_toggle || false,
    background_btn_toggle: state.add_input.background_btn_toggle || false,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  function resetAddInput(){
    dispatch(updateValue(''))
    var text_color_obj = colors.filter((color)=> {
      if(/black/i.test(color.name)){
        return color
      }
    })[0];
    dispatch(setColor('text', text_color_obj))
    var bg_color_obj = colors.filter((color)=> {
      if(/white/i.test(color.name)){
        return color
      }
    })[0];
    dispatch(setColor('background', bg_color_obj))
  }
  return {
    addItem: (props)=> {
      dispatch(addItem(updateIconTheme(props)));
      return resetAddInput();
    },
    updateItem: (props)=> {
      dispatch(updateItem(updateIconTheme(props)));
      return resetAddInput();
    },
    updateValue: (props, char_to_add)=> {
      if(char_to_add.length === 1) {
        return dispatch(updateValue(props.input_value + char_to_add))
      } else if(/backspace/i.test(char_to_add)){
        return dispatch(updateValue(props.input_value.substring(0, props.input_value.length-1)))
      } else if(/enter/i.test(char_to_add)){
        dispatch(addItem(updateIconTheme(props)));
        return resetAddInput();
      }
    }
  }
}

const AddInput = connect(mapStateToProps,mapDispatchToProps)(AddInputPresenter);

export default AddInput;