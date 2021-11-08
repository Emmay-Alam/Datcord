export const filterChannels = (state, serverId) => {
  const serverChannels = state.entities.servers[serverId]?.channels
  const filteredChannels = [];

  if (!serverChannels) return filteredChannels;

  for (let channelId of serverChannels) {
    filteredChannels.push(state.entities.channels[channelId])
  }
  console.log(filteredChannels);
  return filteredChannels;
};

export const filterMembers = (state, serverId) => {
  const serverMembers = Object.values(state.entities.users)
  const filteredMembers = serverMembers.filter(member => member.serverId === serverId)

  return filteredMembers;
};