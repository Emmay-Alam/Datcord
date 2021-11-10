import React from 'react';

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
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
            placeholder="Message"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default MessageForm;