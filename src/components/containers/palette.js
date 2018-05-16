import { connect } from 'react-redux';
import { colors } from '../exports';
import PalettePresenter from '../presenters/palette';

import { setColor } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    colors: colors || [],
    subject: ownProps.subject,
    toggle_state: ownProps.toggle_state
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeColor: (subject, color)=> {
      dispatch(setColor(subject, color))
    }
  }
}

const Palette = connect(mapStateToProps,mapDispatchToProps)(PalettePresenter);

export default Palette;