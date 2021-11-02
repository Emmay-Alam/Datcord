import React from 'react';
import NavBarContainer from './nav_bar_container';

class Splash extends React.Component {
  render () {
    return (
      <main>
        <div className="splash-header">
          <div className="navbar-header">
            <ul className="navbar-links">
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Portfolio</li>
              <li>Resume</li>
            </ul>
            <NavBarContainer />
          </div>
          <div className="splash-slogan">
            <h1>IMAGINE A PLACE...</h1>
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Splash;