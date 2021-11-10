import React from 'react';
import ChatRoomContainer from './chat_room_container';

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
        <ChatRoomContainer type={this.props.type} messagedId={channel.id} />
      </div>
    ) : null
  }
}

export default ChatChannel;