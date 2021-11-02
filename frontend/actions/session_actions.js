import * as SessionAPIUtil from '../util/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const resetSessionErrors = () => ({
  type: RESET_SESSION_ERRORS
})

export const registerUser = user => dispatch => (
  SessionAPIUtil.register(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )
)

export const loginUser = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )
)

export const logoutUser = user => dispatch => (
  SessionAPIUtil.logout(user)
    .then(
      () => dispatch(logoutCurrentUser()),
      errors => dispatch(receiveSessionErrors(errors.responseJSON))
    )
)