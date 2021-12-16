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
                <li><a href="https://www.linkedin.com/in/emmay-alam/">LinkedIn</a></li>
                <li><a href="https://angel.co/u/emmay-alam">Angelist</a></li>
                <li><a href="https://github.com/Emmay-Alam/">Github</a></li>
                <li><a href="https://emmay.dev/">Portfolio</a></li>
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
          <div className="second-landing-container">
            <div className="splash-img-1">
              <img src="https://raw.githubusercontent.com/Emmay-Alam/Datcord/9166b9d143ba9f6c16fa462438b00c9915f11fab/app/assets/images/splash/splash1.svg" />
            </div>
            <div className="second-landing-info">
              <h1>Create an invite-only place where you belong</h1>
              <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </div>
          </div>
        </div>
        <div className="third-landing-background">
          <div className="third-landing-container">
            <div className="third-landing-info">
              <h1>Where hanging out is easy</h1>
              <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call. </p>
            </div>
            <div className="splash-img-2">
              <img src="https://raw.githubusercontent.com/Emmay-Alam/Datcord/2c78ad8979ae2e7674394c61584a36282f1cdf16/app/assets/images/splash/splash2.svg" />
            </div>
          </div>
        </div>
        <div className="fourth-landing-background">
          <div className="fourth-landing-container">
            <div className="splash-img-3">
              <img src="https://raw.githubusercontent.com/Emmay-Alam/Datcord/2c78ad8979ae2e7674394c61584a36282f1cdf16/app/assets/images/splash/splash3.svg" />
            </div>
            <div className="fourth-landing-info">
              <h1>From few to a fandom</h1>
              <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
          </div>
        </div>
        <div className="fifth-landing-background">
          <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
          <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
          <img src="https://raw.githubusercontent.com/Emmay-Alam/Datcord/2c78ad8979ae2e7674394c61584a36282f1cdf16/app/assets/images/splash/splash4.svg" />
        </div>
        <div className="sixth-landing-background">
          <img src="https://raw.githubusercontent.com/Emmay-Alam/Datcord/2c78ad8979ae2e7674394c61584a36282f1cdf16/app/assets/images/splash/splash5.svg" />
          <h2>Ready to start your journey?</h2>
        </div>
        <footer>

        </footer>
      </main>
    )
  }
}

export default Splash;
