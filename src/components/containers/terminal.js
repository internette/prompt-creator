import { connect } from 'react-redux';
import TerminalPresenter from '../presenters/terminal';

const mapStateToProps = (state, ownProps) => {
  return {
    parts: state.terminal.parts || []
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    test: ()=> {

    }
  }
}

const Terminal = connect(mapStateToProps,mapDispatchToProps)(TerminalPresenter);

export default Terminal;