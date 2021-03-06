import * as ChannelAPIUtil from '../util/channels';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const RESET_CHANNEL_ERRORS = 'RESET_CHANNEL_ERRORS';

export const receiveChannel = response => ({
  type: RECEIVE_CHANNEL,
  response
});

export const removeChannel = channel => ({
  type: REMOVE_CHANNEL,
  channel
})

export const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const resetChannelErrors = () => ({
  type: RESET_CHANNEL_ERRORS
});

export const requestChannel = channelId => dispatch => (
  ChannelAPIUtil.requestChannel(channelId)
    .then(
      response => dispatch(receiveChannel(response)),
      errors => dispatch(receiveChannelErrors(errors.responseJSON))
    )
);

export const createChannel = (serverId, channel) => dispatch => (
  ChannelAPIUtil.createChannel(serverId, channel)
    .then(
      channel => dispatch(receiveChannel(channel)),
      errors => dispatch(receiveChannelErrors(errors.responseJSON))
    )
);

export const deleteChannel = (channelId) => dispatch => (
  ChannelAPIUtil.deleteChannel(channelId)
    .then(
      channel  => dispatch(removeChannel(channel)),
      errors => dispatch(receiveChannelErrors(errors.responseJSON))
    )
);