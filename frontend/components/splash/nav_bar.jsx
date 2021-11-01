import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  };

  render () {
    const logout = this.props.user ?
      <Link to={"/@me"} className="button">Open Discord</Link> : <Link to={"/login"} className="button">Login</Link>

    return (
      <div>
        { logout }
      </div>
    )
  };
};

export default NavBar;