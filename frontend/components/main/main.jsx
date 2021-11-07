import React from 'react';
import { Route } from 'react-router';
import Home from '../home/home';
import ServerIndexContainer from '../server/server_index_container';
import ServerContainer from '../server/server_container';
import UserContainer from '../user/user_container';
import ModalContainer from '../modal/modal_container';

class Main extends React.Component {
  render () {
    return (
      <div className="main">
        <ModalContainer />
        <div className="side-container">
          <Home />
          <ServerIndexContainer />
        </div>
        <div className="second-side-container">
          <Route path='/channels/:serverId/:channelId' component={ServerContainer}/>
        </div>
        <div className="user-container">
          <UserContainer />
        </div>
      </div>
    )
  }
}

export default Main;