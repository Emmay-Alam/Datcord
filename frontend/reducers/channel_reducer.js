import { RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL } from "../actions/channel_actions";

const ChannelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_SERVER:
      return action.server.channels;
    case RECEIVE_CHANNEL:
      newState[action.channel.id] = action.channel
      return newState;
    default:
      return oldState;
  }
}

export default ChannelsReducer;