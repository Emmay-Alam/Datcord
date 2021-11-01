import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = { id: null }

const SessionReducer = (oldstate = _nullSession, action) => {
  Object.freeze(oldstate);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.user.id };
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return oldstate;
  }
}

export default SessionReducer;