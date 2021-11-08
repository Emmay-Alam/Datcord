import React from 'react';
import { Route } from 'react-router';
import Home from '../home/home';
import ServerIndexContainer from '../server/server_index_container';
import ServerChannelsContainer from '../server/server_channels_container';
import ServerMembersContainer from '../server/server_members_container';
import ModalContainer from '../modal/modal_container';
import DmIndexContainer from '../dm/dm_index_container';
import UserContainer from '../user/user_container';


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
          <Route path='/channels/@me' component={DmIndexContainer} />
          <Route path='/channels/:serverId/:channelId' component={ServerChannelsContainer} />
          <Route path="/channels/" component={UserContainer} />
        </div>
        <div className="chat-container">ChatRoom goes here</div>
        <div className="members-container">
          <Route path='/channels/:serverId/:channelId' component={ServerMembersContainer} />
        </div>
      </div>
    )
  }
}

export default Main;