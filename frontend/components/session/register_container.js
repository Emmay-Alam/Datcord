import { connect } from 'react-redux';
import { registerUser } from '../../actions/session_actions';
import Register from './register';

const mDTP = dispatch => ({
  registerUser: user => dispatch(registerUser(user))
});

export default connect(null, mDTP)(Register);