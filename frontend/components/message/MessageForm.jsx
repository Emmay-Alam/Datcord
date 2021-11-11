import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    App.cable.subscriptions.subscriptions[0].speak({
      body: this.state.body,
      user_id: this.props.currentUser,
      messaged_type: this.props.type,
      messaged_id: this.props.messagedId
    });
    this.setState({ body: "" });
  }

  render() {
    return (
      <div className="chat-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-container">
            <div className="fake-file-attach">
              <BsFillPlusCircleFill size={20}/>
            </div>
            <input
            className="message-input"
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder={`Message #${this.props.name}`}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default MessageForm;