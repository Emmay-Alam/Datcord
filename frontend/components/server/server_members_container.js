import { connect } from 'react-redux';
import { requestServer } from '../../actions/server_actions';
import { filterMembers } from '../../reducers/selectors';
import ServerMembers from './server_members';

const mSTP = (state, ownProps) => ({
  server: state.entities.servers[ownProps.match.params.serverId],
  members: state.entities.users
})

const mDTP = dispatch => ({
  requestServer: serverId => dispatch(requestServer(serverId))
})

export default connect(mSTP, mDTP)(ServerMembers);