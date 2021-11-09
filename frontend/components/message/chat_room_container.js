import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';
import {
  receiveMessage,
  removeMessage } from '../../actions/message_actions';

const mSTP = (state, ownProps) => ({
  currentUser: state.session,
  messages: state.entities.messages
})

const mDTP = dispatch => ({
  receiveMessage: message => dispatch(receiveMessage(message)),
  removeMessage: message => dispatch(removeMessage(message))
});

export default connect(mSTP, mDTP)(ChatRoom);