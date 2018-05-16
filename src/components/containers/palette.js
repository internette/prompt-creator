import { connect } from 'react-redux';
import { colors } from '../exports';
import PalettePresenter from '../presenters/palette';

const mapStateToProps = (state, ownProps) => {
  return {
    colors: colors || []
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeColor: ()=> {

    }
  }
}

const Palette = connect(mapStateToProps,mapDispatchToProps)(PalettePresenter);

export default Palette;