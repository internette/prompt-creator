import { connect } from 'react-redux';
import TerminalPresenter from '../presenters/terminal';

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.terminal.parts || []
  }
}

const Terminal = connect(mapStateToProps)(TerminalPresenter);

export default Terminal;