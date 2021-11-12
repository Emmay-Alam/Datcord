<<<<<<< HEAD
import { connect } from 'react-redux';
import { requestServers } from '../../actions/server_actions';
import ServerIndex from './server_index';

const mSTP = (state) => ({
  servers: Object.values(state.entities.servers)
})

const mDTP = (dispatch) => ({
  requestServers: () => dispatch(requestServers())
});

=======
import { connect } from 'react-redux';
import { requestServers } from '../../actions/server_actions';
import ServerIndex from './server_index';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state) => ({
  servers: Object.values(state.entities.servers)
})

const mDTP = (dispatch) => ({
  requestServers: () => dispatch(requestServers()),
  openModal: modal => dispatch(openModal(modal))
});

>>>>>>> channel
export default connect(mSTP, mDTP)(ServerIndex);