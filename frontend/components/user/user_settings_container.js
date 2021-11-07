import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import UserSettings from './user_settings';

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
  logoutUser: () => dispatch(logoutUser()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(UserSettings);