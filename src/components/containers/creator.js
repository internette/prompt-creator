import { connect } from 'react-redux';
import CreatorPresenter from '../presenters/creator';

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

const Creator = connect(mapStateToProps,mapDispatchToProps)(CreatorPresenter);

export default Creator;