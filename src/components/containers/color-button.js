import { connect } from 'react-redux';
import ColorButtonPresenter from '../presenters/color-button';
import { togglePalette } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    subject: ownProps.subject,
    toggle_state: ownProps.toggle_state
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    togglePalette: (subject, toggle_state)=> {
      dispatch(togglePalette(subject, !toggle_state))
    }
  }
}

const ColorButton = connect(mapStateToProps,mapDispatchToProps)(ColorButtonPresenter);

export default ColorButton;