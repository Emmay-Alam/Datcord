import React from 'react';
import MessageFormContainer from "./message_form_container";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.bottom = React.createRef();
  }

  componentDidMount () {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      {
        received: data => {
          switch (data.type) {
            case "message":
              this.props.receiveMessage(data.message);
              break;
            case "messages":
              this.props.receiveMessages(data.messages);
              break;
          }
        },
        speak: function(data) {return this.perform("speak", data)},
        load: function() {return this.perform("load")}
      }
    )

    App.cable.subscriptions.subscriptions[0].load();
  }

  loadChat(e) {
    e.preventDefault();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.channelId != this.props.channelId) {
      App.cable.subscriptions.subscriptions[0].load();
      console.log(this.props);
    }
    // this.bottom.current.scrollIntoView();
  }

  componentWillUnmount() {
    App.cable.disconnect;
  }

  render () {

    const { type, messagedId } = this.props;
    const name = type === "Channel" ? `#${this.props.channel.name}` : this.props.dm.name;
    console.log(this.props);
    const messageList = this.props.messages.map((message, idx) => {
      return (
        <li key={message.id}>
          {message.body}
          <div ref={this.bottom} />
        </li>
      )
    });
    return messageList ? (
      <div className="chatroom-container">
        <div className="message-list">{messageList}</div>
        <MessageFormContainer
          name={name}
          type={type}
          messagedId={messagedId}
        />
      </div>
    ) : null
  }
}

export default ChatRoom;
