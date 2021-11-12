import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createServer } from '../../actions/server_actions';
import ServerCreator from './server_creator';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  server: {
    name: '',
    owner_id: state.session.id
  }
});

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  createServer: server => dispatch(createServer(server))
});

export default connect(mSTP, mDTP)(ServerCreator);