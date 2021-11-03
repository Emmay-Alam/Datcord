import { connect } from 'react-redux';
import { requestServers } from '../../actions/server_actions';
import ServerIndex from './server_index';

const mSTP = (state) => ({
  servers: Object.values(state.entities.servers)
})

const mDTP = (dispatch) => ({
  requestServers: () => dispatch(requestServers())
});

export default connect(mSTP, mDTP)(ServerIndex);