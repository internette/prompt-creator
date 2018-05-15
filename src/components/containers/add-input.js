import { connect } from 'react-redux';
import AddInputPresenter from '../presenters/add-input';

const mapStateToProps = (state, ownProps) => {
  return {
    input_value: state.add_input.input_value || '',
    text_color: state.add_input.text_color || '',
    bg_color: state.add_input.bg_color || ''
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateValue: (e)=> {
      console.log(e)
    }
  }
}

const AddInput = connect(mapStateToProps,mapDispatchToProps)(AddInputPresenter);

export default AddInput;