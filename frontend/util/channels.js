export const createChannel = (serverId, channel) => (
  $.ajax({
    method: 'POST',
    url: `/api/${serverId}/channels`,
    data: { channel }
  })
);