import React from 'react';
import ChatRoom from './ChatRoom';

class ChatChannel extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.requestChannel(this.props.match.params.channelId)
  }

  render () {
    const { channel } = this.props;

    return channel ? (
      <div>
        <ChatRoom />
      </div>
    ) : null
  }
}

export default ChatChannel;