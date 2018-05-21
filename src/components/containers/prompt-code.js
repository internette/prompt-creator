import { connect } from 'react-redux';
import { colors } from '../exports';
import PromptCodePresenter from '../presenters/prompt-code';

import { toggleCodeVisibility } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.prompt_code.parts,
    prompt: state.prompt_code.prompt,
    toggle_state: state.prompt_code.toggle_state
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hideCode: (toggle_state)=> {
      return dispatch(toggleCodeVisibility(!toggle_state))
    }
  }
}

const PromptCode = connect(mapStateToProps,mapDispatchToProps)(PromptCodePresenter);

export default PromptCode;