import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChatRoom from './ChatRoom';
import {
  receiveMessages,
  receiveMessage,
  removeMessage } from '../../actions/message_actions';
import { filterMessages } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  window.filterMessages = filterMessages;

  return {
  currentUser: state.session.id.id,
  messages: filterMessages(state, ownProps),
  channelId: ownProps.match.params.channelId
}}

const mDTP = dispatch => ({
  receiveMessages: messages => dispatch(receiveMessages(messages)),
  receiveMessage: message => dispatch(receiveMessage(message)),
  removeMessage: message => dispatch(removeMessage(message))
});

export default withRouter(connect(mSTP, mDTP)(ChatRoom));
