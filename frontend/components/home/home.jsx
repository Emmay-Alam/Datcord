import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render () {
    return (
      <div className="home-wrapper">
        <div className="home-container">
          <Link to='/channels/@me'>
            <img className="home-me" src={window.icon} />
          </Link>
        </div>
      </div>
    )
  }
}

export default Home;