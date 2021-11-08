import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ServersReducer from './servers_reducer';
import ChannelsReducer from './channel_reducer';
import DmsReudcer from './dm_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  servers: ServersReducer,
  channels: ChannelsReducer,
  dms: DmsReudcer
});

export default EntitiesReducer;