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
            <img src="https://raw.githubusercontent.com/Emmay-Alam/Datcord/9166b9d143ba9f6c16fa462438b00c9915f11fab/app/assets/images/splash/splash1.svg" />
          </div>
          <div>
            <h1>Create an invite-only place where you belong</h1>
            <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
          </div>
        </div>
        <div className="third-landing-background">
          <div>
            <h1>Where hanging out is easy</h1>
            <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
          </div>
          <div className="splash-img-1">
            <img src="https://raw.githubusercontent.com/Emmay-Alam/Datcord/9166b9d143ba9f6c16fa462438b00c9915f11fab/app/assets/images/splash/splash1.svg" />
          </div>
        </div>
      </main>
    )
  }
}

export default Splash;
