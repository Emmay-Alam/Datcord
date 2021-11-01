import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import Login from './login';

const mDTP = dispatch => ({
  loginUser: user => dispatch(loginUser(user))
});

export default connect(null, mDTP)(Login);