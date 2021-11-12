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
    }, 1)
  }

  demoLogin(email, password) {

    if (email.length > 0) {
      this.setState({ email: this.state.email + email.shift() },
        () => window.setTimeout(() => this.demoLogin(email, password), 1)
      );
    } else if (password.length > 0) {
      this.setState({ password: this.state.password + password.shift() },
        () => window.setTimeout(() => this.demoLogin(email, password), 1)
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
      <div className='login-page'>
        <div className="login-wrapper">
          <div className="login-box">
            <div className="login-container">
              <h2 className="login-title">Welcome back!</h2>
              <h3 className="login-secondary-title">We're so excited to see you again!</h3>
              <form className="login-form">
                <label className="login-label"><p>EMAIL</p>
                  <input
                    className="login-input email"
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                  />
                </label>
                <label className="login-label"><p>PASSWORD</p>
                  <input
                    className="login-input password"
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                  />
                </label>
                <button className="demo-button" onClick={this.handleDemo}>Login as demo user</button>
                <button className="login-button" onClick={this.handleSubmit}>Login</button>
                <p className="login-redirect">Need an account? <Link className="login-register-button" to={"/register"}>Register</Link></p>
              </form>
            </div>
            <div className="qr-section">
              <img src={window.qr_code} />
              <h2 className="qr-header">Log in with QR Code</h2>
              <h3 className="qr-content">Scan this with the <strong>Discord mobile app</strong> to log in instantly.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;