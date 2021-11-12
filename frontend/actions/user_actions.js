import * as UserAPIUtil from '../util/user';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RESET_USER_ERRORS = "RESET_USER_ERRORS"

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

const resetUserErrors = () => ({
  type: RESET_USER_ERRORS
});

export const requestUser = userId => dispatch => (
  UserAPIUtil.requestUser(userId)
    .then(
      user => dispatch(receiveUser(user))
    )
);