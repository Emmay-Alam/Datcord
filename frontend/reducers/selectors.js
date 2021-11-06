export const filterChannels = (state, serverId) => {
  const serverChannels = state.entities.servers[serverId].channels
  const filteredChannels = [];

  for (let id of serverChannels) {
    if (state.entities.channels[id]) {
      filteredChannels.push(state.entities.channels[id]);
    };
  };

  return filteredChannels;
};