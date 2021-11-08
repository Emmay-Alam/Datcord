import { RECEIVE_SERVER } from "../actions/server_actions";
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from "../actions/channel_actions";

const ChannelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_SERVER:
      if (!action.response.channels) {
        return oldState;
      };
      // NEED TO BE ABLE TO STORE INTO STATE
      // for (let [id, channel] of Object.entries(action.response.channels)) {
      //   newState[id] = channel;
      // }
      const nextState = {};
      for (let [id, channel] of Object.entries(action.response.channels)) {
        nextState[id] = channel;
      }
      return nextState;
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