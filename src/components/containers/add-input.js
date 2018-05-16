import { connect } from 'react-redux';
import AddInputPresenter from '../presenters/add-input';

import { addItem, updateValue } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    input_value: state.add_input.input_value || '',
    text_color: state.add_input.text_color || {},
    background_color: state.add_input.background_color || {},
    text_btn_toggle: state.add_input.text_btn_toggle || false,
    background_btn_toggle: state.add_input.background_btn_toggle || false,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItem: (props)=> {
      dispatch(addItem(props))
    },
    updateValue: (new_value)=> {
      dispatch(updateValue(new_value))
    }
  }
}

const AddInput = connect(mapStateToProps,mapDispatchToProps)(AddInputPresenter);

export default AddInput;