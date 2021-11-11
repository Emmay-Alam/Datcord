import * as ServerAPIUtil from '../util/servers'

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const RECEIVE_SERVER_ERRORS = 'RECEIVE_SERVER_ERRORS';
export const RESET_SERVER_ERRORS = 'RESET_SERVER_ERRORS';

const receiveServers = servers => ({
  type: RECEIVE_SERVERS,
  servers
});

const receiveServer = server => ({
  type: RECEIVE_SERVER,
  server
});

const removeServer = serverId => ({
  type: REMOVE_SERVER,
  serverId
});

const receiveServerErrors = errors => ({
  type: RECEIVE_SERVER_ERRORS,
  errors
});

const resetServerErrors = () => ({
  type: RESET_SERVER_ERRORS
});

export const requestServers = () => dispatch => (
  ServerAPIUtil.requestServers()
    .then(
      servers => dispatch(receiveServers(servers))
    )
);

export const requestServer = serverId => dispatch => (
  ServerAPIUtil.requestServer(serverId)
    .then(
      errors => dispatch(receiveServer(errors))
    )
);

export const createServer = server => dispatch => (
  ServerAPIUtil.createServer(server)
    .then(
      server => dispatch(receiveServer(server)),
      errors => dispatch(receiveServerErrors(errors.responseJSON))
    )
);

export const updateServer = server => dispatch => (
  ServerAPIUtil.updateServer(server)
    .then(
      server => dispatch(receiveServer(server)),
      errors => dispatch(receiveServerErrors(errors.responseJSON))
    )
);

export const deleteServer = serverId => dispatch => (
  ServerAPIUtil.deleteServer(serverId)
    .then(
      () => dispatch(removeServer(serverId)),
      errors => dispatch(receiveServerErrors(errors.responseJSON))
    )
);