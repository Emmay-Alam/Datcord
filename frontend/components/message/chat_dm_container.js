import { connect } from 'react-redux';
import ChatDm from './chat_dm';
import { requestDm } from '../../actions/dm_actions';

const mSTP = (state, ownProps) => {
  return {
  dm: state.entities.dms[ownProps.match.params.dmId],
  type: "Dm"
}};

const mDTP = dispatch => ({
  requestDm: dmId => dispatch(requestDm(dmId))
});

export default connect(mSTP, mDTP)(ChatDm);