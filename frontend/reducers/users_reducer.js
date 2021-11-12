<<<<<<< HEAD
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, { [action.user.id]: action.user })
    default:
      return oldState;
  }
}

=======
import { RECEIVE_SERVER } from '../actions/server_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case RECEIVE_SERVER:
      if (!action.response.members) {
        return oldState;
      };
      // NEED TO BE ABLE TO STORE INTO STATE
      // for (let [id, member] of Object.entries(action.response.members)) {
      //   newState[id] = member;
      // }
      // return newState;
      const nextState = {};
      for (let [id, member] of Object.entries(action.response.members)) {
        nextState[id] = member;
      }
      return nextState;
    default:
      return oldState;
  }
}

>>>>>>> channel
export default UsersReducer;