import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_DM } from '../actions/dm_actions';
import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES,
  REMOVE_MESSAGE } from '../actions/message_actions';


const MessagesReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_MESSAGES:
      return action.messages
    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message;
      return newState;
    case RECEIVE_CHANNEL:
      if (!action.response.messages) {
        return oldState
      };
      for (let [id, message] of Object.entries(action.response.messages)) {
        newState[id] = message;
      };
      return newState;
    case RECEIVE_DM:
      if (!action.response.messages) {
        return oldState
      };
      for (let [id, message] of Object.entries(action.response.messages)) {
        newState[id] = message;
      };
      return newState;
    case REMOVE_MESSAGE:
      delete newState[action.message.id];
      return newState;
    default:
      return oldState;
  }
}

export default MessagesReducer;