import React from 'react';
import ChatRoomContainer from './chat_room_container';
import { BiHash } from 'react-icons/bi';

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
      <div className="chat-content-container">
        <div className="chat-header">
          <div className="chat-hashtag">
            <BiHash size={26}/>
          </div>
          <div className="chat-name">
            { channel.name }
          </div>
        </div>
        <div className="channel-chat">
          <ChatRoomContainer channel={channel} type={this.props.type} messagedId={channel.id} />
        </div>
      </div>
    ) : null
  }
}

export default ChatChannel;
