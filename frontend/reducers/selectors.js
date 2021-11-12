export const filterChannels = (state, serverId) => {
  const serverChannels = state.entities.servers[serverId]?.channels
  const filteredChannels = [];

  if (!serverChannels) return filteredChannels;

  for (let channelId of serverChannels) {
    if (state.entities.channels[channelId]) filteredChannels.push(state.entities.channels[channelId])
  }
  return filteredChannels;
};

export const filterMembers = (state, serverId) => {
  const serverMembers = Object.values(state.entities.users)
  const filteredMembers = serverMembers.filter(member => member.serverId === serverId)

  return filteredMembers;
};

export const filterMessages = (state, ownProps) => {
  if (ownProps.type === 'Channel') {
    const filtered = Object.values(state.entities.messages).filter(message =>
      message.messagedType === "Channel" && message.messagedId === ownProps.messagedId)

    return filtered;
  } else {
    const filtered = Object.values(state.entities.messages).filter(message =>
      message.messagedType === "Dm" && message.messagedId === ownProps.messagedId)

      return filtered;
  }
}