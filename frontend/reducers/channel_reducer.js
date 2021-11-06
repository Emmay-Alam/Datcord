import { RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";

const ChannelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_SERVER:
      if (!action.server.channels) {
        return oldState;
      };
      for (let [id, channel] of Object.entries(action.server.channels)) {
        newState[id] = channel;
      }
      return newState;
    case RECEIVE_CHANNEL:
      newState[action.channel.id] = action.channel
      return newState;
    case REMOVE_CHANNEL:
      delete newState[action.channelId]
      return newState
    default:
      return oldState;
  }
}

export default ChannelsReducer;