import React from 'react';
import MemberIndex from '../member/member_index';

class ServerMembers extends React.Component {
  componentDidMount () {
    if (!this.props.server) this.props.requestServer(this.props.match.params.serverId)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.requestServer(this.props.match.params.serverId);
    }
  }

  render () {
    const { server, members } = this.props;
    return server ? (
      <div>
        <div className="members-index">
          <MemberIndex server={server} members={members} />
        </div>
      </div>
    ) : null
  }
}

export default ServerMembers;