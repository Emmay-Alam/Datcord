import { connect } from 'react-redux';
import ChatChannel from './chat_channel';
import { requestDm } from '../../actions/dm_actions';

const mSTP = (state, ownProps) => ({
  dm: state.entities.dms[ownProps.match.params.id],
  type: "Dm"
});

const mDTP = dispatch => ({
  request: dmId => dispatch(requestDm(dmId))
});

export default connect(mSTP, mDTP)(ChatChannel);