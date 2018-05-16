import { connect } from 'react-redux';
import CreatorPresenter from '../presenters/creator';

const mapStateToProps = (state, ownProps) => {
  return {
    list_items: state.creator.parts || []
  }
}

const Creator = connect(mapStateToProps)(CreatorPresenter);

export default Creator;