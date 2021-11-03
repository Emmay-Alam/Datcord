import * as ChannelAPIUtil from '../util/channels';

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const RECEIVE_CHANNEL_ERRORS = 'RECEIVE_CHANNEL_ERRORS';
export const RESET_CHANNEL_ERRORS = 'RESET_CHANNEL_ERRORS';

export const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const receiveChannelErrors = errors => ({
  type: RECEIVE_CHANNEL_ERRORS,
  errors
});

export const resetChannelErrors = () => ({
  type: RESET_CHANNEL_ERRORS
});

export const createChannel = (serverId, channel) => dispatch => (
  ChannelAPIUtil.createChannel(serverId, channel)
    .then(
      channel => dispatch(receiveChannel(channel)),
      errors => dispatch(receiveChannelErrors(errors.responseJSON))
    )
);