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

export default Main;