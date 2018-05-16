import { connect } from 'react-redux';

import { colors } from '../exports';

import AddInputPresenter from '../presenters/add-input';

import { addItem, updateValue } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
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
  return {
    addItem: (props)=> {
      props['icon_theme'] = colors.filter((color_obj)=> {
        if(color_obj.hex_string.toLowerCase() === props.background_color.hex_string.toLowerCase()){
          return color_obj
        }
      })[0].icon_color;
      dispatch(addItem(props))
    },
    updateValue: (new_value)=> {
      dispatch(updateValue(new_value))
    }
  }
}

const AddInput = connect(mapStateToProps,mapDispatchToProps)(AddInputPresenter);

export default AddInput;