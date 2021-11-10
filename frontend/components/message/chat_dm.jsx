import React from 'react';
import ChatRoomContainer from './chat_room_container';

class ChatDm extends React.Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.requestDm(this.props.match.params.dmId)
  }

  render () {
    const { dm } = this.props;

    console.log('testing')
    return dm ? (
      <div>
        <ChatRoomContainer type={this.props.type} messagedId={this.props.dmId} />
      </div>
    ) : null
  }
}

export default ChatDm;