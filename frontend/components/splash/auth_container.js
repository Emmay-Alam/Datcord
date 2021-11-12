import { connect } from 'react-redux';
import Auth from './auth';
import { logoutUser } from '../../actions/session_actions';

const mSTP = state => ({
  user: state.session.id
});

const mDTP = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mSTP, mDTP)(Auth);