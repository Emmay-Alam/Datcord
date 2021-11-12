import {
  RECEIVE_DMS,
  RECEIVE_DM} from '../actions/dm_actions';

const DmsReudcer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_DMS:
      return action.dms
    case RECEIVE_DM:
      newState[action.dm.id] = action.dm;
      return newState;
    default:
      return oldState;
  }
}

export default DmsReudcer;