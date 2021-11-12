<<<<<<< HEAD
import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ServersReducer from './servers_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  servers: ServersReducer
});

=======
import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ServersReducer from './servers_reducer';
import ChannelsReducer from './channel_reducer';
import DmsReudcer from './dm_reducer';
import MessagesReducer from './messages_reducer';

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  servers: ServersReducer,
  channels: ChannelsReducer,
  dms: DmsReudcer,
  messages: MessagesReducer
});

>>>>>>> channel
export default EntitiesReducer;