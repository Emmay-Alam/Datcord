import React from 'react';
import { Link } from 'react-router-dom';

class Auth extends React.Component {
  constructor(props) {
    super(props)
  };

  render () {
    const logout = this.props.user ?
      <Link to={"/channels/@me"} className="landing-button">Open Discord</Link> : <Link to={"/login"} className="landing-button">Login</Link>

    return (
      <div>
        { logout }
      </div>
    )
  };
};

export default Auth;