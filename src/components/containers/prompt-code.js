import { connect } from 'react-redux';
import { colors } from '../exports';
import PromptCodePresenter from '../presenters/prompt-code';

import { togglePrompt } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.prompt_code.parts,
    prompt: state.prompt_code.prompt,
    toggle_state: state.prompt_code.toggle_state
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hideCode: ()=> {
      // dispatch(togglePrompt(subject, color))
    }
  }
}

const PromptCode = connect(mapStateToProps,mapDispatchToProps)(PromptCodePresenter);

export default PromptCode;