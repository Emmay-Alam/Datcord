import { connect } from 'react-redux';
import ChatChannel from './chat_channel';
import { requestChannel } from '../../actions/channel_actions';

const mSTP = (state, ownProps) => {
  return {
  channel: state.entities.channels[ownProps.match.params.channelId],
  type: 'Channel'
}};

const mDTP = dispatch => ({
  requestChannel: channelId => dispatch(requestChannel(channelId))
});

export default connect(mSTP, mDTP)(ChatChannel);