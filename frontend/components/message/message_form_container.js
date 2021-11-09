import { connect } from 'react-redux';
import MessageForm from './MessageForm';

const mSTP = (state, ownProps) => {
  return {
  currentUser: state.session.id
}};

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(MessageForm);