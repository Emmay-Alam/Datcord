import React from 'react';
import AuthContainer from './auth_container';
import { HiOutlineDownload } from 'react-icons/hi';

class Splash extends React.Component {
  render () {
    return (
      <main>
        <header>
          <nav>
            <div className="navbar-header">
              <h2>Datcord</h2>
              <ul className="navbar-links">
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Portfolio</li>
                <li>Resume</li>
              </ul>
              <AuthContainer />
            </div>
          </nav>
        </header>

        <div className="first-landing-background">
          <div className="splash-slogan-container">
            <div className="splash-slogan">
              <h1>IMAGINE A PLACE...</h1>
              <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            </div>
            <div className="splash-btn-container">
              <button className="download-btn">
                <HiOutlineDownload size={20} /> Download for Windows
              </button>
              <div className="button-separator"></div>
              <button className="open-btn">
                Open Datcord in your browser
              </button>
            </div>
          </div>
        </div>
        <div className="second-landing-background">
          <div className="splash-img-1">
          </div>
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
      </main>
    )
  }
}

export default Splash;
