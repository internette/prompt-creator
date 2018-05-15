import { connect } from 'react-redux';
import TerminalPresenter from '../presenters/terminal';

const mapStateToProps = (state, ownProps) => {
  return {
    listItems: state.creator.listItems || []
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