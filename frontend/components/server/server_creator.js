import React from 'react';

class ServerCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.server;
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  update (field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createServer(this.state);
  }

  render () {
    const { closeModal } = this.props;

    return (
      <div>
        <div>
          <div className="server-creator-header">
            <h2>Customize your server</h2>
            <p>Give your new server a personality with a name and an icon. You can always change it later.</p>
          </div>
          <button onClick={() => closeModal()}>X</button>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>SERVER NAME
            <input
              type="text"
              value={this.state.name}
              onChange={this.update('name')}
            />
          </label>
          <button>Create</button>
        </form>
      </div>
    )
  }
}

export default ServerCreator;