import React from 'react';
import ServerIndexItem from './server_index_item';
import { HiOutlinePlus } from 'react-icons/hi'

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount () {
    this.props.requestServers();
  }

  render () {
    const { openModal } = this.props;
    const serverIndexItems = this.props.servers.map(server =>
      (
        <ServerIndexItem
          key={`${server.id}-${server.name}`}
          server={server}
        />
      )
    )

    return (
      <div className="server-index-container">
        <ul className="server-container">
          { serverIndexItems }
        </ul>
        <div className="server-index-seperator"></div>
        <div className="new-server">
          <button onClick={() => openModal('Add a Server')}>
            <HiOutlinePlus size={21}/>
          </button>
        </div>
      </div>
    )
  }
}

export default ServerIndex;