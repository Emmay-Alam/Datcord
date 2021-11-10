import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';
import {
  receiveMessages,
  receiveMessage,
  removeMessage } from '../../actions/message_actions';
import { filterMessages } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  return {
  currentUser: state.session.id,
  messages: filterMessages(state, ownProps)
}}

const mDTP = dispatch => ({
  receiveMessages: messages => dispatch(receiveMessages(messages)),
  receiveMessage: message => dispatch(receiveMessage(message)),
  removeMessage: message => dispatch(removeMessage(message))
});

export default connect(mSTP, mDTP)(ChatRoom);