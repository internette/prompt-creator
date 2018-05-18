import { connect } from 'react-redux';
import CreatorPresenter from '../presenters/creator';

import { toggleCodeVisibility } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    list_items: state.creator.parts || []
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleCodeVisibility: (toggle_state)=> {
      return dispatch(toggleCodeVisibility(!toggle_state))
    }
  }
}

const Creator = connect(mapStateToProps, mapDispatchToProps)(CreatorPresenter);

export default Creator;