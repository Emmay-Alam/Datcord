import React from 'react';
import ChatRoomContainer from './chat_room_container';
import { FiAtSign } from 'react-icons/fi';

class ChatDm extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.requestDm(this.props.match.params.dmId)
  }

  render () {
    const { dm } = this.props;

    return dm ? (
      <div className="chat-content-container">
        <div className="chat-header">
          <div className="chat-hashtag">
            <FiAtSign size={26}/>
          </div>
          <div className="chat-name">
            { dm.name }
          </div>
        </div>
        <div className="channel-chat">
          <ChatRoomContainer dm={dm} type={this.props.type} messagedId={dm.id} />
        </div>
      </div>
    ) : null
  }
}

export default ChatDm;