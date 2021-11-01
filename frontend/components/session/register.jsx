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
      <div>
        <h2>Create an account</h2>
        <form>
          <label>EMAIL
            <input
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
            />
          </label>
          <label>USERNAME
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <label>PASSWORD
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <label>DATE OF BIRTH
            <input
              type="number"
              value={this.state.month}
              onChange={this.update('month')}
            />
            <input
              type="number"
              value={this.state.day}
              onChange={this.update('day')}
            />
            <input
              type="number"
              value={this.state.year}
              onChange={this.update('year')}
            />
          </label>
          <button onClick={this.handleSubmit}>Continue</button>
          <Link to={"/login"}>Already have an account?</Link>
          <p>By registering, you agree to Datcord's Terms of Service and Privacy Policy.</p>
        </form>
      </div>
    );
  }
};

export default Register;