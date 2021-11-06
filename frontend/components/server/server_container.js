import { connect } from 'react-redux';
import { requestServer } from '../../actions/server_actions';
import Server from './server';
import { filterChannels } from '../../reducers/selectors'

const mSTP = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  channels: filterChannels(state, ownProps.match.params.serverId)
})

const mDTP = dispatch => ({
  requestServer: serverId => dispatch(requestServer(serverId))
})

export default connect(mSTP, mDTP)(Server);