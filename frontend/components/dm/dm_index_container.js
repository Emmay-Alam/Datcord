import { connect } from 'react-redux';
import { requestDms } from '../../actions/dm_actions';
import DmIndex from './dm_index';

const mSTP = (state, ownProps) => ({
  dms: Object.values(state.entities.dms)
});

const mDTP = (dispatch) => ({
  requestDms: () => dispatch(requestDms())
});

export default connect(mSTP, mDTP)(DmIndex);