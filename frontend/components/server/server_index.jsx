import React from 'react';
import ServerIndexItem from './server_index_item';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount () {
    this.props.requestServers();
  }

  render () {
    const serverIndexItems = this.props.servers.map(server =>
      (
        <ServerIndexItem
          key={server.id}
          server={server}
        />
      )
    )

    return (
      <ul>
        { serverIndexItems }
      </ul>
    )
  }
}

export default ServerIndex;