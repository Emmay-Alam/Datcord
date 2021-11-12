<<<<<<< HEAD
import React from 'react';
import Home from '../home/home';
import ServerIndexContainer from '../server/server_index_container';

class Main extends React.Component {
  render () {
    return (
      <div className="side-container">
        <Home />
        <ServerIndexContainer />
      </div>
    )
  }
}

=======
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../home/home';
import ServerIndexContainer from '../server/server_index_container';
import ServerChannelsContainer from '../server/server_channels_container';
import ServerMembersContainer from '../server/server_members_container';
import ModalContainer from '../modal/modal_container';
import DmIndexContainer from '../dm/dm_index_container';
import ChatChannelContainer from '../message/chat_channel_container';
import ChatDmContainer from '../message/chat_dm_container';
import ChatRoomContainer from '../message/chat_room_container';


class Main extends React.Component {
  render () {
    return (
      <div className="main">
        <ModalContainer />
        <div className="side-container">
          <Home />
          <div className="server-seperator"></div>
          <ServerIndexContainer />
        </div>
        <div className="second-side-container">
          <Switch>
            <Route exact path='/channels/@me/:dmId?' component={DmIndexContainer} />
            <Route exact path='/channels/:serverId/:channelId' component={ServerChannelsContainer} />
          </Switch>
        </div>
        <div className="chat-container">
          <Switch>
            <Route exact path='/channels/@me/:dmId' component={ChatDmContainer} />
            <Route exact path='/channels/:serverId/:channelId' component={ChatChannelContainer} />
          </Switch>
        </div>
        <div className="members-container">
        <Switch>
          <Route exact path='/channels/@me/:dmId?' render={() =>
            <ul className="future-features"><p>Coming Soon!</p>
              <li>Friends</li>
              <li>Direct Messaging</li>
              <li>Custom Avatars</li>
            </ul>
          } />
          <Route exact path='/channels/:serverId/:channelId' component={ServerMembersContainer} />
        </Switch>
        </div>
      </div>
    )
  }
}

>>>>>>> channel
export default Main;