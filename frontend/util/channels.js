<<<<<<< HEAD
export const createChannel = (serverId, channel) => (
  $.ajax({
    method: 'POST',
    url: `/api/${serverId}/channels`,
    data: { channel }
  })
=======
export const requestChannel = channelId => (
  $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}`
  })
);

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
>>>>>>> channel
);