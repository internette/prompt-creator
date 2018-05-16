import { connect } from 'react-redux';
import ListItemPresenter from '../presenters/list-item';

import { editItem, removeItem } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    is_editing: ownProps.attributes.is_editing,
    input_value: ownProps.attributes.input_value,
    icon_theme: ownProps.attributes.icon_theme,
    text_color: ownProps.attributes.text_color,
    background_color: ownProps.attributes.background_color,
    text_btn_toggle: ownProps.attributes.text_btn_toggle,
    background_btn_toggle: ownProps.attributes.background_btn_toggle,
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editItem: ()=> {
      dispatch(editItem(ownProps.attributes, 'edit'))
    },
    removeItem: () => {
      dispatch(removeItem(ownProps.attributes))
    }
  }
}

const ListItem = connect(mapStateToProps,mapDispatchToProps)(ListItemPresenter);

export default ListItem;