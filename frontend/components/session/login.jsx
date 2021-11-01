import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    };

  update(field) {
    return (e) => this.setState({ [field]: e.target.value} );
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.loginUser(this.state)
      .then(() => this.props.history.push('/@me'))
  }

  render () {
    return (
      <div>
        <h2>Welcome Back!</h2>
        <h3>We're so excited to see you again!</h3>
        <form>
          <label>EMAIL
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <label>PASSWORD
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <button onClick={this.handleSubmit}>Login</button>
          <p>Need an account? <Link to={"/register"}>Register</Link></p>
        </form>
      </div>
    );
  }
};

export default Login;