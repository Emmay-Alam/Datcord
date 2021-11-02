import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logoutUser } from '../../actions/session_actions';

const mSTP = state => ({
  user: state.session.id
});

const mDTP = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mSTP, mDTP)(NavBar);