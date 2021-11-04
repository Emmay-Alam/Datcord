import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      month: '',
      day: '',
      year: '',
      dob: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    };

  update(field) {
    return (e) => this.setState({ [field]: e.target.value} );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { month, day, year } = this.state;
    this.state.dob = new Date(month, day, year);

    this.props.registerUser(this.state)
      .then(() => this.props.history.push('/@me'))
  }

  render () {
    return (
      <div className="register-wrapper">
        <div className="register-box">
          <div className="register-container">
            <h2 className="register-title">Create an account</h2>
            <form className="register-form">
              <label className="register-label">EMAIL
                <input
                  className="register-input"
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>
              <label className="register-label">USERNAME
                <input
                  className="register-input"
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                />
              </label>
              <label className="register-label">PASSWORD
                <input
                  className="register-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <label className="register-label">DATE OF BIRTH
                <input
                  className="register-input"
                  type="number"
                  value={this.state.month}
                  onChange={this.update('month')}
                />
                <input
                  className="register-input"
                  type="number"
                  value={this.state.day}
                  onChange={this.update('day')}
                />
                <input
                  className="register-input"
                  type="number"
                  value={this.state.year}
                  onChange={this.update('year')}
                />
              </label>
              <button className="register-button" onClick={this.handleSubmit}>Continue</button>
              <Link className="register-login-button" to={"/login"}>Already have an account?</Link>
              <p className="terms">By registering, you agree to Datcord's <strong>Terms of Service</strong> and <strong>Privacy Policy</strong>.</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Register;