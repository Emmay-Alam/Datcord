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
    this.handleDemo = this.handleDemo.bind(this);
    };

  update(field) {
    return (e) => this.setState({ [field]: e.target.value} );
  }

  userLogin () {
    this.props.loginUser(this.state)
      .then(() => this.props.history.push('/channels/@me'))
  }

  handleDemo(e) {
    e.preventDefault();

    let email = "demouser@gmail.com".split("");
    let password = "password".split("")

    setTimeout(() => {
      this.demoLogin(email, password)
    }, 500)
  }

  demoLogin(email, password) {

    if (email.length > 0) {
      this.setState({ email: this.state.email + email.shift() },
        () => window.setTimeout(() => this.demoLogin(email, password), 100)
      );
    } else if (password.length > 0) {
      this.setState({ password: this.state.password + password.shift() },
        () => window.setTimeout(() => this.demoLogin(email, password), 100)
      );
    } else {
      this.userLogin();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.userLogin();
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
          <button onClick={this.handleDemo}>Login as a Demo User</button>
          <button onClick={this.handleSubmit}>Login</button>
          <p>Need an account? <Link to={"/register"}>Register</Link></p>
        </form>
      </div>
    );
  }
};

export default Login;