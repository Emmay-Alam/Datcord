import React from 'react';
import NavBarContainer from './nav_bar_container';

class Splash extends React.Component {
  render () {
    return (
      <main>
        <div className="splash-header">
          <div className="navbar-container">
            <ul className="navbar-links">
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Portfolio</li>
              <li>Resume</li>
            </ul>
            <NavBarContainer />
          </div>
        </div>
      </main>
    )
  }
}