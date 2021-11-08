import { connect } from 'react-redux';
import { requestServer } from '../../actions/server_actions';
import { filterChannels } from '../../reducers/selectors'
import ServerChannels from './server_channels';

const mSTP = (state, ownProps) => {
  return {
  server: state.entities.servers[ownProps.match.params.serverId],
  channels: state.entities.channels
  // channels: filterChannels(state, ownProps.match.params.serverId)
}}

const mDTP = dispatch => ({
  requestServer: serverId => dispatch(requestServer(serverId))
})

export default connect(mSTP, mDTP)(ServerChannels);