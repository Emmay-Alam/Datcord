import React from 'react';
import ServerIndexContainer from '../server/server_index_container';

class Home extends React.Component {
  render () {
    return (
      <div>
        HOME
        <ServerIndexContainer />
      </div>
    )
  }
}

export default Home;