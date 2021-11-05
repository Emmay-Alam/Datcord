export const createChannel = (serverId, channel) => (
  $.ajax({
    method: 'POST',
    url: `/api/${serverId}/channels`,
    data: { channel }
  })
);

export const deleteChannel = channelId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/channels/${channelId}`
  })
);